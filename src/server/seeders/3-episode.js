'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Ep. 1',
        image: 'https://cf.shopee.ph/file/2d60dbfabc944f57057da467e0801176_tn',
        masters_id: 1,
        created_by: 1
      },
      {
        title: 'Ep. 2',
        image: 'https://i.pinimg.com/originals/d5/1d/6f/d51d6f238758c30a543e8aee058042f5.jpg',
        masters_id: 1,
        created_by: 1
      },
      {
        title: 'Ep. 3',
        image: 'https://i.pinimg.com/originals/89/f6/2a/89f62aeb5b2c134b5c592e2023a283da.jpg',
        masters_id: 1,
        created_by: 1
      },
      {
        title: 'Ep. 1',
        image: 'https://pm1.narvii.com/6723/bd18e5c19e8ef4718656d2f8aceed05b4c7e1d03_hq.jpg',
        masters_id: 2,
        created_by: 1
      },
      {
        title: 'Ep. 2',
        image: 'https://upload.wikimedia.org/wikipedia/id/thumb/b/b0/Lookism_Cover.png/220px-Lookism_Cover.png',
        masters_id: 2,
        created_by: 1
      },
      {
        title: 'Ep. 3',
        image: 'https://66.media.tumblr.com/4a6d1fff71ab4170c364322e7954adde/tumblr_pkbykayQNp1wtdpl8_640.jpg',
        masters_id: 2,
        created_by: 1
      },
      {
        title: 'Ep. 1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS6iEchWQHZyBSwNVNZ2CQGxOq1llKHHVCPrG2ycMOGNipw9oQ',
        masters_id: 3,
        created_by: 2
      },
      {
        title: 'Ep. 2',
        image: 'http://ylabcomics.com/data/file/03_02_eng/thumb-2040675354_sM3PQlLN_78df152475352d8a460e66054ff4abe4194165f3_240x240.jpg',
        masters_id: 3,
        created_by: 2
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
