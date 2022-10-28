import { Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import React from 'react';

const UpdatePromotion = ({
  setIsPopup,
  data,
  promotion,
  promotionData,
  indexPromotion,
  setConfirmCancelButton,
}) => {
  function validateValue(value) {
    let error;
    if (value > 50000) {
      error = 'Value must be less than 50.000 ?';
    }
    return error;
  }
  function validateCode(value) {
    let error;
    promotionData.map((item, idx) => {
      if (item.code == value && idx !== indexPromotion) {
        error = 'code has been duplicated !';
        return;
      }
    });
    return error;
  }
  return (
    <div>
      <div className='update_country'>
        <p className='form_label'>Quốc gia</p>
        <p>Việt Nam</p>
      </div>
      <Formik
        initialValues={{
          cities: data.cities,
          typeOfPromotion: data.typeOfPromotion,
          code: data.code,
          startDate: data.startDate,
          endDate: data.startDate,
          createdAt: data.createdAt,
          promotionBy: data.promotionBy,
          limit: data.limit,
          typeValue: data.value.type,
          maxValue: data.value.maxValue,
          value: data.value.value,
          target: data.target,
          description: data.description,
          locked: data.locked,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          promotion.update(
            { _id: data._id },
            {
              $set: {
                cities: values.cities,
                typeOfPromotion: values.typeOfPromotion,
                code: values.code,
                startDate: values.startDate,
                endDate: values.startDate,
                createdAt: values.createdAt,
                promotionBy: values.promotionBy,
                limit: values.limit,
                value: {
                  type: values.typeValue,
                  value: values.value,
                  maxValue: values.maxValue,
                },
                target: values.target,
                description: values.description,
                locked: values.locked,
              },
            }
          );
          setIsPopup(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className='form_left'>
                <div className='form_item'>
                  <p className='form_label'>
                    <span style={{ color: 'red' }}>*</span> Các thành phố
                  </p>
                  <Field
                    className='form_input'
                    type='text'
                    name='cities'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cities}
                  />
                </div>
                <div className='form_item'>
                  <p className='form_label'>
                    <span style={{ color: 'red' }}>*</span> Mã ưu đãi
                  </p>
                  <Field
                    type='text'
                    placeholder='TEST04V4BG'
                    className='form_input'
                    name='code'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    validate={validateCode}
                  />
                  {errors.code && touched.code && (
                    <div className='error_message'>{errors.code}</div>
                  )}
                </div>
                <div className='form_item'>
                  <p className='form_label'>
                    <span style={{ color: 'red' }}>*</span> Loại khuyến mãi
                  </p>
                  <Field
                    as='select'
                    name='typeOfPromotion'
                    placeholder='BOTH'
                    className='form_select'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.typeOfPromotion}
                  >
                    <option value='both'>BOTH</option>
                    <option value='tasker'>TASKER</option>
                    <option value='user'>USER</option>
                  </Field>
                </div>
                <div className='form_item'>
                  <p className='form_label'>
                    <span style={{ color: 'red' }}>*</span> Bắt dầu - kết thúc
                  </p>
                  <Field
                    type='date'
                    className='form_date'
                    name='startDate'
                    value={values.startDate}
                  />
                </div>
                <div className='form_item'>
                  <p className='form_label'>
                    Apply for task from date - to date
                  </p>
                  <Field
                    type='date'
                    className='form_date'
                    name='createdAt'
                    value={values.createdAt}
                  />
                </div>
                <div className='form_item'>
                  <p className='form_label'>Người chịu khuyến mãi</p>
                  <div className='wrap_radio'>
                    <label htmlFor='radio_bTaskee'>
                      <Field
                        id='radio_bTaskee'
                        type='radio'
                        className='form_radio'
                        name='promotionBy'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='btaskee'
                      />{' '}
                      BTASKEE
                    </label>
                    <label htmlFor='radio_tasker'>
                      <Field
                        id='radio_taskers'
                        type='radio'
                        className='form_radio'
                        name='promotionBy'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='taskers'
                      />{' '}
                      TASKER
                    </label>
                  </div>
                </div>
                <div className='form_item'>
                  <p className='form_label'>Dành cho đối tượng nào</p>
                  <div className='wrap_radio'>
                    <label htmlFor='radio_bTaskee'>
                      <Field
                        id='radio_bTaskee'
                        type='radio'
                        className='form_radio'
                        name='target'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='both'
                      />{' '}
                      BOTH
                    </label>
                    <label htmlFor='radio_tasker'>
                      <Field
                        id='radio_tasker'
                        type='radio'
                        className='form_radio'
                        name='target'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='asker'
                      />{' '}
                      ASKER
                    </label>
                    <label htmlFor='radio_tasker'>
                      <Field
                        id='radio_tasker'
                        type='radio'
                        className='form_radio'
                        name='target'
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                  <Field
                    className='form_select'
                    as='select'
                    name='services'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.services}
                  >
                    <option value='takeCareKid'>Trông trẻ</option>
                    <option value='cleanHome'>Dọn dẹp nhà</option>
                    <option value='goMarket'>Đi chợ</option>
                    <option value='cleanSofa'>Vệ sinh sofa</option>
                  </Field>
                </div>
                <div className='form_item'>
                  <p className='form_label'>
                    <span style={{ color: 'red' }}>*</span> Số lượng
                  </p>
                  <Field
                    className='form_input'
                    type='number'
                    name='limit'
                    value={values.limit}
                  />
                </div>
                <div className='form_value'>
                  <h3>GIÁ TRỊ</h3>
                  <div className='form_item'>
                    <p className='form_label'>Loại giá trị</p>
                    <Field
                      as='select'
                      className='form_select'
                      name='typeValue'
                      value={values.typeValue}
                    >
                      <option value='MONEY'>MONEY</option>
                      <option value='PERCENTAGE'>PERCENTAGE</option>
                    </Field>
                  </div>
                  <div className='form_item'>
                    <p className='form_label'>Giá trị</p>
                    <Field
                      type='number'
                      name='value'
                      className='form_input'
                      value={values.value}
                      validate={validateValue}
                    />
                    {errors.value && touched.value && (
                      <div className='error_message'>{errors.value}</div>
                    )}
                  </div>
                </div>
                <label className='blocked'>
                  <Field type='checkbox' name='locked' /> <span>Locked</span>
                </label>
              </div>
            </div>
            <div className='form_item'>
              <p className='form_label'>
                <span style={{ color: 'red' }}>*</span> Mô tả
              </p>
              <Field
                as='textarea'
                name='description'
                value={values.description}
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
                  type='submit'
                  disabled={isSubmitting}
                  variant='contained'
                  color='success'
                >
                  Cập nhật
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePromotion;
