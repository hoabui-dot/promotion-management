// import { input, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useRef } from 'react';
import moment from 'moment';

const UpdatePromotion = ({
  setIsPopup,
  data,
  promotion,
  promotionData,
  indexPromotion,
  setConfirmCancelButton,
}) => {
  const currentDate = new Date();
  const updateForm = useRef({});
  const [checked, setChecked] = useState(data.locked || false);

  // function validateValue(value) {
  //   let error;
  //   if (value > 50000) {
  //     error = 'Value must be less than 50.000 ?';
  //   }
  //   return error;
  // }
  // function validateCode(value) {
  //   let error;
  //   promotionData.map((item, idx) => {
  //     if (item.code == value && idx !== indexPromotion) {
  //       error = 'code has been duplicated !';
  //       return;
  //     }
  //   });
  //   return error;
  // }
  const handleSubmit = () => {
    Meteor.call(
      'update.promotion',
      data._id,
      updateForm.current,
      (err, res) => {
        err ? alert(err) : alert('update Successfully !');
      }
    );
    setIsPopup(false);
    console.log('form: ', updateForm.current);
  };

  return (
    <div>
      <div className='update_country'>
        <p className='form_label'>Quốc gia</p>
        <p>Việt Nam</p>
      </div>
      {/* <Formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          Meteor.call('update.promotion', data._id, values, (err, res) => {
            err ? alert(err) : alert('update Successfully !');
          });
          setIsPopup(false);
        }}
      > */}

      <form>
        <div className='form'>
          <div className='form_left'>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Các thành phố
              </p>
              <input
                className='form_input'
                type='text'
                name='cities'
                onChange={e => {
                  if (e.target.value !== data.cities) {
                    updateForm.current = {
                      ...updateForm.current,
                      cities: e.target.value,
                    };
                  }
                }}
                defaultValue={data.cities}
              />
            </div>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Mã ưu đãi
              </p>
              <input
                type='text'
                placeholder='TEST04V4BG'
                className='form_input'
                name='code'
                onChange={e => {
                  if (e.target.value !== data.code) {
                    updateForm.current = {
                      ...updateForm.current,
                      code: e.target.value,
                    };
                  }
                }}
                defaultValue={data.code}
              />
            </div>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Loại khuyến mãi
              </p>
              <select
                name='typeOfPromotion'
                placeholder='BOTH'
                className='form_select'
                onChange={e => {
                  if (e.target.value !== data.typeOfPromotion) {
                    updateForm.current = {
                      ...updateForm.current,
                      typeOfPromotion: e.target.value,
                    };
                  }
                }}
                defaultValue={data.typeOfPromotion}
              >
                <option value='both'>BOTH</option>
                <option value='tasker'>TASKER</option>
                <option value='user'>USER</option>
              </select>
            </div>
            {/* {/* <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Bắt dầu - kết thúc
              </p>
              <input
                type='date'
                className='form_date'
                name='startDate'
                onChange={e => {
                  if (e.target.value !== data.startDate) {
                    updateForm.current = {
                      ...updateForm.current,
                      startDate: e.target.value,
                    };
                  }
                }}
                defaultValue={new Date(data.startDate)}
              />
            </div> */}
            <div className='form_item'>
              <p className='form_label'>Apply for task from date - to date</p>
              <input
                type='date'
                className='form_date'
                name='createdAt'
                onChange={e => {
                  if (e.target.value !== data.createdAt) {
                    updateForm.current = {
                      ...updateForm.current,
                      createdAt: moment(e.target.value).format(),
                    };
                  }
                }}
                defaultValue={data.createdAt}
              />
            </div>
            <div className='form_item'>
              <p className='form_label'>Người chịu khuyến mãi</p>
              <div className='wrap_radio'>
                <label htmlFor='radio_bTaskee'>
                  <input
                    id='radio_bTaskee'
                    type='radio'
                    className='form_radio'
                    name='promotionBy'
                    onChange={e => {
                      if (e.target.value !== data.promotionBy) {
                        updateForm.current = {
                          ...updateForm.current,
                          promotionBy: e.target.value,
                        };
                      }
                    }}
                    value='btaskee'
                    defaultValue={data.promotionBy}
                  />{' '}
                  BTASKEE
                </label>
                <label htmlFor='radio_tasker'>
                  <input
                    id='radio_taskers'
                    type='radio'
                    className='form_radio'
                    name='promotionBy'
                    onChange={e => {
                      if (e.target.value !== data.promotionBy) {
                        updateForm.current = {
                          ...updateForm.current,
                          promotionBy: e.target.value,
                        };
                      }
                    }}
                    value='tasker'
                    defaultValue={data.promotionBy}
                  />{' '}
                  TASKER
                </label>
              </div>
            </div>
            <div className='form_item'>
              <p className='form_label'>Dành cho đối tượng nào</p>
              <div className='wrap_radio'>
                <label htmlFor='radio_bTaskee'>
                  <input
                    id='radio_bTaskee'
                    type='radio'
                    className='form_radio'
                    name='target'
                    onChange={e => {
                      if (e.target.value !== data.target) {
                        updateForm.current = {
                          ...updateForm.current,
                          target: e.target.value,
                        };
                      }
                    }}
                    value='both'
                  />{' '}
                  BOTH
                </label>
                <label htmlFor='radio_tasker'>
                  <input
                    id='radio_tasker'
                    type='radio'
                    className='form_radio'
                    name='target'
                    onChange={e => {
                      if (e.target.value !== data.target) {
                        updateForm.current = {
                          ...updateForm.current,
                          target: e.target.value,
                        };
                      }
                    }}
                    value='asker'
                  />{' '}
                  ASKER
                </label>
                <label htmlFor='radio_tasker'>
                  <input
                    id='radio_tasker'
                    type='radio'
                    className='form_radio'
                    name='target'
                    onChange={e => {
                      if (e.target.value !== data.target) {
                        updateForm.current = {
                          ...updateForm.current,
                          target: e.target.value,
                        };
                      }
                    }}
                    value='tasker'
                  />{' '}
                  TASKER
                </label>
              </div>
            </div>
          </div>
          <div className='form_right'>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Dịch vụ
              </p>
              <select
                className='form_select'
                name='services'
                onChange={e => {
                  if (e.target.value !== data.services) {
                    updateForm.current = {
                      ...updateForm.current,
                      services: e.target.value,
                    };
                  }
                }}
                defaultValue={data.services}
              >
                <option value='takeCareKid'>Trông trẻ</option>
                <option value='cleanHome'>Dọn dẹp nhà</option>
                <option value='goMarket'>Đi chợ</option>
                <option value='cleanSofa'>Vệ sinh sofa</option>
              </select>
            </div>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Số lượng
              </p>
              <input
                className='form_input'
                type='number'
                name='limit'
                onChange={e => {
                  if (e.target.value !== data.limit) {
                    updateForm.current = {
                      ...updateForm.current,
                      limit: e.target.value,
                    };
                  }
                }}
                defaultValue={data.limit}
              />
            </div>
            <div className='form_value'>
              <h3>GIÁ TRỊ</h3>
              <div className='form_item'>
                <p className='form_label'>Loại giá trị</p>
                <select
                  className='form_select'
                  name='typeValue'
                  onChange={e => {
                    if (e.target.value !== data.typeValue) {
                      updateForm.current = {
                        ...updateForm.current,
                        typeValue: e.target.value,
                      };
                    }
                  }}
                  defaultValue={data.typeValue}
                >
                  <option value='MONEY'>MONEY</option>
                  <option value='PERCENTAGE'>PERCENTAGE</option>
                </select>
              </div>
              <div className='form_item'>
                <p className='form_label'>Giá trị</p>
                <input
                  type='number'
                  name='value'
                  className='form_input'
                  onChange={e => {
                    if (e.target.value !== data.value) {
                      updateForm.current = {
                        ...updateForm.current,
                        value: e.target.value,
                      };
                    }
                  }}
                  defaultValue={data.value}
                />
              </div>
            </div>
            <label className='blocked'>
              <input
                onChange={e => {
                  if (e.target.value !== data.locked) {
                    updateForm.current = {
                      ...updateForm.current,
                      locked: checked,
                    };
                  }
                }}
                onClick={() => setChecked(!checked)}
                checked={checked}
                type='checkbox'
                name='locked'
              />{' '}
              <span>Locked</span>
            </label>
          </div>
        </div>
        <div className='form_item'>
          <p className='form_label'>
            <span style={{ color: 'red' }}>*</span> Mô tả
          </p>
          <input
            as='textarea'
            name='description'
            defaultValue={data.description}
            onChange={e => {
              if (e.target.value !== data.description) {
                updateForm.current = {
                  ...updateForm.current,
                  description: e.target.value,
                };
              }
            }}
            placeholder='hello...'
            className='form_textarea'
          />
        </div>
        <div className='modal_footer'>
          <Button
            variant='contained'
            color='error'
            onClick={() => setConfirmCancelButton(true)}
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
            <Button
              onClick={handleSubmit}
              // type='submit'
              variant='contained'
              color='success'
            >
              Cập nhật
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePromotion;
