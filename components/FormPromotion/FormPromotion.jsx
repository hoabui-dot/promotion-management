import Button from '@mui/material/Button';
import { Field, Formik } from 'formik';
import React from 'react';
import { Meteor } from 'meteor/meteor';

const FormPromotion = ({ setOpenDialog, promotionData }) => {
  const currentDate = new Date();

  function validateCode(value) {
    let error;
    promotionData.map(data => {
      if (data.code == value) {
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
          cities: '',
          typeOfPromotion: 'BOTH',
          code: '',
          startDate: currentDate,
          applyDate: currentDate,
          promotionBy: '',
          subject: '',
          limit: 1,
          value: 0,
          typeValue: 'MONEY',
          maxValue: 0,
          description: '',
          locked: false,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
          Meteor.call(
            'insert.promotion',
            {
              startDate: new Date(values.startDate),
              endDate: new Date(values.startDate),
              userIds: [],
              limit: values.limit,
              isFirstBooking: true,
              taskStartDate: new Date(values.startDate),
              taskEndDate: new Date(values.startDate),
              code: values.code,
              value: {
                type: values.typeValue,
                value: values.value,
                maxValue: values.value,
              },
              typeOfPromotion: values.typeOfPromotion,
              target: values.subject,
              serviceId: '',
              // taskPlace: {
              //   city: values.cities,
              //   district: '2 District',
              // },
              createdAt: new Date(values.applyDate),
              cities: values.cities,
              isoCode: '',
              description: values.description,
              locked: values.locked,
              promotionBy: values.promotionBy,
              isTestingGame: true,
              minOrderValue: 0.2,
            },
            (err, res) => {
              if (err) {
                alert(err);
              } else {
                alert('Create Promotion Successfully !');
              }
            }
          );
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
                    className='form_select'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.typeOfPromotion}
                  >
                    <option value='BOTH'>BOTH</option>
                    <option value='NEW'>NEW</option>
                    <option value='CURRENT'>CURRENT</option>
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
                        name='promotionBy'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value='bstakee'
                      />{' '}
                      BTASKEE
                    </label>
                    <label htmlFor='radio_tasker'>
                      <Field
                        id='radio_tasker'
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
                        name='subject'
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
                        name='subject'
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
                        name='subject'
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
                      name='typeValue'
                      className='form_select'
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
                    />
                  </div>
                </div>
                <label className='blocked'>
                  <Field type='checkbox' name='locked' /> <span> Locked</span>
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
            <div className='modal_wrapBtn'>
              <Button
                variant='outlined'
                onClick={() => setOpenDialog(false)}
                style={{
                  marginRight: '15px',
                  border: '1px solid rgb(100,100,100)',
                  color: 'rgb(100,100,100)',
                }}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                disabled={isSubmitting}
                variant='contained'
                color='success'
                onClick={() => !errors.code && setOpenDialog(false)}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormPromotion;
