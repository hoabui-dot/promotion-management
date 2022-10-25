import { Field, Form, Formik } from 'formik';
import Button from '@mui/material/Button';
import React from 'react';

const UpdatePromotion = () => {
  const date = new Date();

  return (
    <div>
      <div className='update_country'>
        <p className='form_label'>Quốc gia</p>
        <p>Việt Nam</p>
      </div>
      <Formik
        initialValues={{
          cities: '',
          typeOfPromotion: '',
          code: '',
          startDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          applyDate: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
          person: '',
          number: 1,
          typeValue: '',
          value: 0,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
                  />
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
                    name='applyDate'
                    value={values.applyDate}
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
                        name='person'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='btaskee'
                      />{' '}
                      BTASKEE
                    </label>
                    <label htmlFor='radio_tasker'>
                      <Field
                        id='radio_tasker'
                        type='radio'
                        className='form_radio'
                        name='person'
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
                    name='number'
                    value={values.number}
                  />
                </div>
                <div className='form_value'>
                  <h3>GIÁ TRỊ</h3>
                  <div className='form_item'>
                    <p className='form_label'>Loại giá trị</p>
                    <Field
                      as='select'
                      className='form_select'
                      value={values.typeValue}
                    >
                      <option value='money'>MONEY</option>
                    </Field>
                  </div>
                  <div className='form_item'>
                    <p className='form_label'>Giá trị</p>
                    <Field
                      type='number'
                      name='value'
                      className='form_input'
                      value={values.value}
                    />
                  </div>
                </div>
                <label className='blocked'>
                  <Field type='checkbox' name='block' /> <span>Block</span>
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatePromotion;
