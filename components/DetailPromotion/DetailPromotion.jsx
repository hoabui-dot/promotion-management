import Button from '@mui/material/Button';
import React, { useState } from 'react';

const DetailPromotion = ({ data, startDate, endDate, createdAt }) => {
  const [activeButton, setActiveButton] = useState('detail');

  return (
    <div className='modal detailPopup'>
      <p className='detail_title'>Detail Information</p>
      <div className='modal_wrap'>
        <div className='detail'>
          <div className='btn_wrapDetail'>
            <Button
              onClick={() => setActiveButton('detail')}
              variant='contained'
              className={`btn--detail ${
                activeButton == 'detail' ? 'active' : ''
              }`}
            >
              Detail Information
            </Button>
            <Button
              onClick={() => setActiveButton('update')}
              className={`btn--update ${
                activeButton == 'update' ? 'active' : ''
              }`}
              variant='outlined'
            >
              Update promotion
            </Button>
          </div>
          <div className='general'>
            <p>General Information</p>
            <div className='detail_wrap'>
              <div className='detail_form'>
                <div className='detail_item'>
                  <p>Mã ưu đãi:</p>
                  <p>{data.code}</p>
                </div>
                <div className='detail_item'>
                  <p>Số lượng:</p>
                  <p>{data.limit}</p>
                </div>
                <div className='detail_item'>
                  <p>Quốc gia:</p>
                  <p>{data.isoCode}</p>
                </div>
                <div className='detail_item'>
                  <p>Thành phố:</p>
                  <p>{data?.cities}</p>
                </div>
              </div>
              <div className='detail_form'>
                <div className='detail_item'>
                  <p>Người nhận khuyến mãi:</p>
                  <p>Btaskee</p>
                </div>
                <div className='detail_item'>
                  <p>Dành cho đối tượng nào:</p>
                  <p>{data.target}</p>
                </div>
                <div className='detail_item'>
                  <p>Loại khuyến mãi:</p>
                  <p>{data.typeOfPromotion}</p>
                </div>
                <div className='detail_item'>
                  <p>Dịch vụ:</p>
                  <p>Dọn dẹp nhà</p>
                </div>
                <div className='detail_item'>
                  <p>Bắt đầu - kết thúc:</p>
                  <p>
                    {startDate.getDate()}/{startDate.getMonth()}/
                    {startDate.getFullYear()} - {endDate.getDate()}/
                    {endDate.getMonth()}/{endDate.getFullYear()}
                  </p>
                </div>
                <div className='detail_item'>
                  <p>Ngày làm:</p>
                  <p></p>
                </div>
              </div>
              <div className='detail_form'>
                <div className='detail_item'>
                  <p>Mô tả:</p>
                  <p>hello</p>
                </div>
                <div className='detail_item'>
                  <p>Locked:</p>
                  <p></p>
                </div>
                <div className='detail_item'>
                  <p>Người tạo:</p>
                  <p>myquyen.le</p>
                </div>
                <div className='detail_item'>
                  <p>Ngày tạo:</p>
                  <p>
                    {createdAt.getDate()}/{createdAt.getMonth()}/
                    {createdAt.getFullYear()}
                  </p>
                </div>
                <div className='detail_item'>
                  <p>Task support:</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className='general'>
            <p>Advanced Information</p>
            <div className='detail_wrap'>
              <div className='detail_form'>
                <div className='detail_item detail_itemTitle'>
                  <p>Value</p>
                </div>
                <div className='detail_item'>
                  <p>Loại giá trị</p>
                  <p>{data.value.type}</p>
                </div>
                <div className='detail_item'>
                  <p>Gía trị</p>
                  <p>{data.value.maxValue}đ</p>
                </div>
              </div>
              <div className='detail_form'>
                <div className='detail_item detail_itemTitle'>
                  <p>Vị trí công việc</p>
                </div>
              </div>
              <div className='detail_form'>
                <div className='detail_item'>
                  <p>Gía trị đặt hàng tối thiểu:</p>
                  <p>0</p>
                </div>
                <div className='detail_item'>
                  <p>tên khách hàng:</p>
                  <p></p>
                </div>
                <div className='detail_item'>
                  <p>Dành cho khách hàng đặt lần đầu:</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal_footer'>
        <Button variant='contained'>Xóa</Button>
        <div className='modal_wrapBtn'>
          <Button variant='outlined' style={{ marginLeft: '10px' }}>
            Hủy
          </Button>
          <Button variant='contained'>Cập nhật</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPromotion;