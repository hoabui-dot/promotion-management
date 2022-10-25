import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Promotion } from '../api/promotion';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreatePromotion from '../../components/CreatePromotion/CreatePromotion';
import Dialog from '@mui/material/Dialog';
import UpdatePromotion from '../../components/DetailPromotion/UpdatePromotion';
import DetailInformation from '../../components/DetailPromotion/DetailInformation';

export const Promotions = () => {
  const promotions = useTracker(() => Promotion.find({}).fetch());
  const [isStatus, setIsStatus] = useState(promotions);
  const [isPopup, setIsPopup] = useState(false);
  const [activeButton, setActiveButton] = useState('detail');

  const handleChangeInputSearch = event => {
    const arr = promotions.filter(
      data => data.value.type === event.target.value
    );
    if (arr !== []) {
      setIsStatus(arr);
    } else {
      setIsStatus(promotions);
    }
  };
  const handleRemove = id => {
    Promotion.remove(id);
    setIsPopup(false);
  };

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
          <CreatePromotion />
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
          onChange={e => handleChangeInputSearch(e)}
          style={{ marginLeft: '10px' }}
          placeholder='Mã ưu đãi'
        />
        <Button className='btn_search' variant='contained' color='success'>
          <SearchIcon />
        </Button>
        <div className='filter_result'>10 kết quả</div>
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
          {promotions.map(data => {
            const startDate = new Date(data.startDate);
            const endDate = new Date(data.endDate);
            const createdAt = new Date(data.createdAt);
            return (
              <div key={data._id}>
                <Button
                  className='btn_promotion'
                  variant='outlined'
                  onClick={() => setIsPopup(true)}
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
                      {data.value.maxValue}đ
                    </div>
                    <div className='item item--startDate'>
                      {startDate.getHours()}:{startDate.getMinutes()}:
                      {startDate.getSeconds()} {startDate.getDate()}/
                      {startDate.getMonth()}/{startDate.getFullYear()}
                    </div>
                    <div className='item item--endDate'>
                      {endDate.getHours()}:{endDate.getMinutes()}:
                      {endDate.getSeconds()} {endDate.getDate()}/
                      {endDate.getMonth()}/{endDate.getFullYear()}
                    </div>
                    <div className='item item--number'>0/{data.limit}</div>
                    <div className='item item--status'>
                      <span>expired</span>
                    </div>
                    <div className='item item--createdAt'>
                      {createdAt.getHours()}:{createdAt.getMinutes()}:
                      {createdAt.getSeconds()} {createdAt.getDate()}/
                      {createdAt.getMonth()}/{createdAt.getFullYear()}
                    </div>
                  </div>
                </Button>
                <Dialog open={isPopup} onClose={() => setIsPopup(false)}>
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
                            data={data}
                            startDate={startDate}
                            endDate={endDate}
                            createdAt={createdAt}
                            promotion={Promotion}
                            setIsPopup={setIsPopup}
                            id={data._id}
                          />
                        ) : (
                          <UpdatePromotion />
                        )}
                        <div className='modal_footer'>
                          <Button
                            variant='contained'
                            color='error'
                            onClick={() => handleRemove(data._id)}
                          >
                            Xóa
                          </Button>
                          <div className='modal_wrapBtn'>
                            <Button
                              variant='outlined'
                              onClick={() => setIsPopup(false)}
                              style={{
                                marginRight: '15px',
                                border: '1px solid rgb(100,100,100)',
                                color: 'rgb(100,100,100)',
                              }}
                            >
                              Hủy
                            </Button>
                            <Button variant='contained' color='success'>
                              Cập nhật
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
