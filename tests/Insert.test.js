import { Promotion } from '../imports/api/promotion';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
// import { expect } from 'chai';
import '../imports/api/Method/Method';
import _ from 'lodash';

describe('promotion', () => {
  const insertData = {
    code: 'testcode',
    limit: 1,
    value: {
      type: 'MONEY',
      value: 1,
      maxValue: 1,
    },
    target: 'ASKER',
    typeOfPromotion: 'BOTH',
    startDate: new Date('2022-10-28T03:38:51.156+00:00'),
    isoCode: 'testisocode',
    cities: 'Ho Chi Minh    ',
    taskPlace: {
      city: [],
      district: [],
    },
    description: 'descriptiontest',
    endDate: new Date('2022-10-28T03:38:51.156+00:00'),
    serviceId: 'serviceidtest',
    userIds: [],
    isFirstBooking: false,
    taskStartDate: new Date('2022-10-28T03:38:51.156+00:00'),
    taskEndDate: new Date('2022-10-28T03:38:51.156+00:00'),
    locked: false,
    promotionBy: 'BTASKEE',
    isTestingGame: false,
    minOrderValue: 1,
    createdAt: new Date('2022-10-28T03:38:51.156+00:00'),
  };

  beforeEach(() => {
    Promotion.remove({});
  });
  it.only('should insert promotion', function () {
    let method = Meteor.server.method_handlers['insert.promotion'];
    method.apply({}, [insertData]);

    const promotion = Promotion.findOne({ code: 'testcode' });

    expect(promotion.code).toEqual('testcode');
    expect(promotion.target).toEqual('ASKER');
    expect(promotion.typeOfPromotion).toEqual('BOTH');
  });

  it.only('remove promotion', function () {
    let method = Meteor.server.method_handlers['remove.promotion'];
    method.apply({}, [insertData]);

    const promotion = Promotion.findOne({ code: 'testcode' });

    expect(promotion).notExist;
  });
});

describe('update promotion', () => {
  const updateData = {
    _id: '123abc',
    code: 'testcode',
    limit: 1,
    value: {
      type: 'MONEY',
      value: 1,
      maxValue: 1,
    },
    target: 'ASKER',
    typeOfPromotion: 'BOTH',
    startDate: new Date('2022-10-28T03:38:51.156+00:00'),
    isoCode: 'testisocode',
    cities: 'Ho Chi Minh    ',
    taskPlace: {
      city: [],
      district: [],
    },
    description: 'descriptiontest',
    endDate: new Date('2022-10-28T03:38:51.156+00:00'),
    serviceId: 'serviceidtest',
    userIds: [],
    isFirstBooking: false,
    taskStartDate: new Date('2022-10-28T03:38:51.156+00:00'),
    taskEndDate: new Date('2022-10-28T03:38:51.156+00:00'),
    locked: false,
    promotionBy: 'BTASKEE',
    isTestingGame: false,
    minOrderValue: 1,
    createdAt: new Date('2022-10-28T03:38:51.156+00:00'),
  };

  beforeEach(() => {
    Promotion.remove({});
    Promotion.insert(updateData);
  });

  it.only('update promotion', function () {
    const dataUpdate = {
      target: 'TASKER',
      promotionBy: 'ASKER',
    };

    let method = Meteor.server.method_handlers['update.promotion'];
    method.apply({}, ['123abc', dataUpdate]);

    const promotion = Promotion.findOne({ _id: '123abc' });

    expect(promotion.target).toEqual('TASKER');
    expect(promotion.promotionBy).toEqual('ASKER');
  });
});
