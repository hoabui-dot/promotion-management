import React, { useEffect, useRef, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Promotion } from '../api/promotion';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreatePromotion from '../../components/CreatePromotion/CreatePromotion';
import Dialog from '@mui/material/Dialog';
import DetailInformation from '../../components/DetailPromotion/DetailInformation';
import UpdatePromotion from '../../components/DetailPromotion/UpdatePromotion';
import moment from 'moment';
import ConfirmRemove from '../../components/ConfirmRemove/ConfirmRemove';

export const Promotions = () => {
  let promotions = useTracker(() => Promotion.find({}).fetch());
  const [result, setResult] = useState(0);
  const [filterBy, setFilterBy] = useState('');
  const [isPopup, setIsPopup] = useState(false);
  const [activeButton, setActiveButton] = useState('detail');
  const [modalData, setModalData] = useState({});
  const [confirmCancelButton, setConfirmCancelButton] = useState(false);
  const [indexPromotion, setIndexPromotion] = useState(0);

  useEffect(() => {
    setResult(
      promotions.filter(promotion =>
        filterBy
          ? promotion.code.includes(filterBy) ||
            promotion.description.includes(filterBy)
          : true
      ).length
    );
  }, [promotions]);

  return (
    <div className='container'>
      <div className='title'>
        <Button className='btn_back' variant='outlined'>
          <ArrowBackIosIcon />
        </Button>
        <h1>PROMOTION</h1>
      </div>
      <div className='btn_page'>
        <Button variant='contained'>Single promotion</Button>
        <Button variant='contained'>Promotion series</Button>
        <Button variant='contained'>bRewards</Button>
        <Button variant='contained'>Campaign</Button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          marginBottom: '30px',
        }}
      >
        <Button
          variant='contained'
          color='success'
          style={{ textTransform: 'capitalize' }}
        >
          List single promotion
        </Button>
        <div className='filter_createPromotion'>
          <CreatePromotion promotion={Promotion} promotionData={promotions} />
        </div>
      </div>
      <div className='promotion_filter'>
        <div className='filter_pageValue'>
          <span>Hiển thị</span>
          <select name='screen' className=''>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <input
          onChange={e => {
            setTimeout(() => setFilterBy(e.target.value), 1000);
          }}
          style={{ marginLeft: '10px' }}
          placeholder='Mã ưu đãi'
        />
        <Button className='btn_search' variant='contained' color='success'>
          <SearchIcon />
        </Button>
        <div className='filter_result'>{result} kết quả</div>
      </div>
      <div className='promotion_wrap'>
        <ul className='promotion promotion--title'>
          <li>
            <div className='promotion_list promotion_list--title'>
              <div className='item item--code'>Mã ưu đãi</div>
              <div className='item item--desc'>Mô tả</div>
              <div className='item item--promotionType'>Loại khuyến mãi</div>
              <div className='item item--valueType'>Loại giá trị</div>
              <div className='item item--value'>Giá trị</div>
              <div className='item'>Ngày bắt đầu</div>
              <div className='item'>Ngày kết thúc</div>
              <div className='item item--number'>Số lượng</div>
              <div className='item item--status'>Trạng thái</div>
              <div className='item item--createdAt'>Ngày tạo</div>
            </div>
          </li>
        </ul>
        <ul className='promotion'>
          {promotions
            .filter(promotion =>
              filterBy
                ? promotion.code.includes(filterBy) ||
                  promotion.description.includes(filterBy)
                : true
            )
            .map((data, index) => {
              return (
                <div key={data._id}>
                  <Button
                    className='btn_promotion'
                    variant='outlined'
                    onClick={() => {
                      setIsPopup(true);
                      setModalData(data);
                      setIndexPromotion(index);
                    }}
                  >
                    <div className='promotion_list'>
                      <div className='item item--code item--codeColor'>
                        {data.code}
                      </div>
                      <div className='item item--desc'>{data.description}</div>
                      <div className='item item--promotionType'>
                        {data.typeOfPromotion}
                      </div>
                      <div className='item item--valueType'>
                        {data.value.type}
                      </div>
                      <div className='item item--value'>
                        {new Intl.NumberFormat().format(data.value.value)} đ
                      </div>
                      <div className='item item--startDate'>
                        {moment(data.startDate).hours()}:
                        {moment(data.startDate).minutes()}:
                        {moment(data.startDate).seconds()}{' '}
                        {moment(data.startDate).date()}/
                        {moment(data.startDate).month()}/
                        {moment(data.startDate).year()}
                      </div>
                      <div className='item item--endDate'>
                        {moment(data.endDate).hours()}:
                        {moment(data.endDate).minutes()}:
                        {moment(data.endDate).seconds()}{' '}
                        {moment(data.endDate).date()}/
                        {moment(data.endDate).month()}/
                        {moment(data.endDate).year()}
                      </div>
                      <div className='item item--number'>0/{data.limit}</div>
                      <div className='item item--status'>
                        <span>expired</span>
                      </div>
                      <div className='item item--createdAt'>
                        {moment(data.createdAt).hours()}:
                        {moment(data.createdAt).minutes()}:
                        {moment(data.createdAt).seconds()}{' '}
                        {moment(data.createdAt).date()}/
                        {moment(data.createdAt).month()}/
                        {moment(data.createdAt).year()}
                      </div>
                    </div>
                  </Button>
                </div>
              );
            })}
          <Dialog
            open={isPopup}
            onClose={() => {
              setIsPopup(false);
              setActiveButton('detail');
            }}
          >
            <div className='modal'>
              <p className='detail_title'>Detail Information</p>
              <div className='modal_wrap'>
                <div className='detail'>
                  <div className='btn_wrapDetail'>
                    <Button
                      onClick={() => {
                        setActiveButton('detail');
                        setIsPopup(true);
                      }}
                      variant='contained'
                      className={`btn--detail ${
                        activeButton == 'detail' ? 'active' : ''
                      }`}
                    >
                      Detail Information
                    </Button>
                    <Button
                      onClick={() => {
                        setActiveButton('update');
                        setIsPopup(true);
                      }}
                      className={`btn--update ${
                        activeButton == 'update' ? 'active' : ''
                      }`}
                      variant='outlined'
                    >
                      Update promotion
                    </Button>
                  </div>
                  {activeButton == 'detail' ? (
                    <DetailInformation
                      data={modalData}
                      createdAt={modalData.createdAt}
                      setIsPopup={setIsPopup}
                      setConfirmCancelButton={setConfirmCancelButton}
                      setActiveButton={setActiveButton}
                    />
                  ) : (
                    <UpdatePromotion
                      setIsPopup={setIsPopup}
                      data={modalData}
                      promotion={Promotion}
                      promotionData={promotions}
                      indexPromotion={indexPromotion}
                      setConfirmCancelButton={setConfirmCancelButton}
                    />
                  )}
                </div>
              </div>
            </div>
          </Dialog>
          <ConfirmRemove
            confirmCancelButton={confirmCancelButton}
            setConfirmCancelButton={setConfirmCancelButton}
            promotion={Promotion}
            id={modalData._id}
            setIsPopup={setIsPopup}
          />
        </ul>
      </div>
    </div>
  );
};
