import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Promotion } from '/imports/api/promotion';

function insertLink({ title, url }) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}
function insertLink({ title, url }) {
  Promotion.insert({ title, url, createdAt: new Date() });
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
  }
});
