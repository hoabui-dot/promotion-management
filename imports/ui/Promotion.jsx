import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Promotion } from '../api/promotion';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CreatePromotion from '../../components/CreatePromotion/CreatePromotion';

export const Promotions = () => {
  const promotions = useTracker(() => Promotion.find({}).fetch());
  const [isStatus, setIsStatus] = useState(promotions);

  console.log(promotions);

  const onDelete = _id => {
    Promotion.remove(_id);
  };

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

  return (
    <div className='container'>
      <div className='title'>
        <Button className='back_btn' variant='outlined'>
          <ArrowBackIosIcon />
        </Button>
        <h1>PROMOTION</h1>
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
        <select className='filter_status' onChange={e => handleSelectStatus(e)}>
          <option value='all'>Tất cả</option>
          <option value='active'>Đang diễn ra</option>
          <option value='finished'>Đã kết thúc</option>
        </select>
        <div className='filter_createPromotion'>
          <CreatePromotion />
        </div>
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
              <li key={data._id}>
                <div className='promotion_list'>
                  <div className='item item--code item--codeColor'>
                    {data.code}
                  </div>
                  <div className='item item--desc'>{data.description}</div>
                  <div className='item item--promotionType'>
                    {data.typeOfPromotion}
                  </div>
                  <div className='item item--valueType'>{data.value.type}</div>
                  <div className='item item--value'>{data.value.maxValue}đ</div>
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
