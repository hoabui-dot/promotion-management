import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Promotion } from '/imports/api/promotion';
import '../imports/api/Method/Method';

function insertLink({ title, url }) {
  LinksCollection.insert({
    title,
    url,
    createdAt: new Date(),
  });
}

function insertPromotion({ title, url }) {
  Promotion.insert({
    title,
    url,
    createdAt: new Date(),
  });
}

Meteor.startup(() => {
  //If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com',
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    insertLink({
      _id: {
        $oid: '6350b241c05503c669301c45',
      },
      startData: {
        $date: {
          $numberLong: '1628478232361',
        },
      },
      value: {
        type: 'PERCENTAGE',
        value: 0.15,
        maxValue: 40000,
      },
      code: 'XvvIeeB',
      createdAt: {
        $date: {
          $numberLong: '1633748632361',
        },
      },
      description: 'Enjoy 15% discount for Cleaning Your House',
      endDate: {
        $date: {
          $numberLong: '1638932632361',
        },
      },
      isoCode: 'VN',
      limit: 1,
      serviceId: 'pcZRQ6PqmjrAPe5gt',
      startDate: {
        $date: {
          $numberLong: '1628478232361',
        },
      },
      target: 'ASKER',
      typeOfPromotion: 'BOTH',
      userIds: [''],
    });
  }
});
Meteor.startup(() => {
  //If the Links collection is empty, add some data.
  if (Promotion.find().count() === 0) {
    insertPromotion({
      _id: '614c147eba35ecae55716a99',
      value: {
        type: 'PERCENTAGE', // hoặc MONEY
        value: 0.2, // hoặc số tiền 30000
        maxValue: 30000.0, // ko bắt buộc nếu là MONEY
      },
      serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
      isoCode: 'VN', // quốc gia
      description: 'Enjoy 20% discount for Cleaning Service', // tên KM
      startDate: Date('2021-08-09T10:03:52.361+07:00'), // ngày bắt đầu
      code: 'DefaultCode', // mã code
      endDate: Date('2021-09-08T10:03:52.361+07:00'), // ngày kết thúc KM
      target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
      createdAt: Date('2021-08-09T10:03:52.361+07:00'),
      limit: 1.0, // số lượng code sử dụng
      typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
    });

    insertPromotion({
      _id: '614c147eba35ecae55716a99',
      value: {
        type: 'PERCENTAGE', // hoặc MONEY
        value: 0.2, // hoặc số tiền 30000
        maxValue: 30000.0, // ko bắt buộc nếu là MONEY
      },
      serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
      isoCode: 'VN', // quốc gia
      description: 'Enjoy 20% discount for Cleaning Service', // tên KM
      startDate: Date('2021-08-09T10:03:52.361+07:00'), // ngày bắt đầu
      code: 'DefaultCode1', // mã code
      endDate: Date('2021-09-08T10:03:52.361+07:00'), // ngày kết thúc KM
      target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
      createdAt: Date('2021-08-09T10:03:52.361+07:00'),
      limit: 1.0, // số lượng code sử dụng
      typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
    });

    insertPromotion({
      _id: '614c147eba35ecae55716a99',
      value: {
        type: 'PERCENTAGE', // hoặc MONEY
        value: 0.2, // hoặc số tiền 30000
        maxValue: 30000.0, // ko bắt buộc nếu là MONEY
      },
      serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
      isoCode: 'VN', // quốc gia
      description: 'Enjoy 20% discount for Cleaning Service', // tên KM
      startDate: Date('2021-08-09T10:03:52.361+07:00'), // ngày bắt đầu
      code: 'DefaultCode2', // mã code
      endDate: Date('2021-09-08T10:03:52.361+07:00'), // ngày kết thúc KM
      target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
      createdAt: Date('2021-08-09T10:03:52.361+07:00'),
      limit: 1.0, // số lượng code sử dụng
      typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
    });
  }
});
