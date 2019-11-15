'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('masters', [
      {
        title: 'Kimetsu No Yaiba',
        genre: 'Action',
        Image: 'https://www.ubackground.com/_ph/4/473208961.jpg',
        created_by: 1
      },
      {
        title: 'Lookism',
        genre: 'Action',
        Image: 'https://swebtoon-phinf.pstatic.net/20150826_288/1440568558919w1i7O_JPEG/thumbnail_ipad.jpg',
        created_by: 1
      },
      {
        title: 'Study Group',
        genre: 'Drama',
        Image: 'https://swebtoon-phinf.pstatic.net/20190502_128/1556776788182u0tYR_JPEG/thumb_ipad.jpg',
        created_by: 2
      },
      {
        title: 'The Boss',
        genre: 'Action',
        Image: 'https://swebtoon-phinf.pstatic.net/20160927_135/1474968278407BHjSt_JPEG/thumbnail_pc.jpg',
        created_by: 1
      },
      {
        title: 'True Beauty',
        genre: 'Romance',
        Image: 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg',
        created_by: 3
      },
      {
        title: 'Age Matters',
        genre: 'Romance',
        Image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525115991l/40004581._SX318_.jpg',
        created_by: 3
      },
      {
        title: 'A Good Day to be a Dog',
        genre: 'Romance',
        Image: 'https://swebtoon-phinf.pstatic.net/20180904_277/1536059595536c1T81_JPEG/thumb_ipad.jpg',
        created_by: 3
      },
      {
        title: 'Weak Hero',
        genre: 'Drama',
        Image: 'https://swebtoon-phinf.pstatic.net/20190510_60/1557483841879d0gpe_JPEG/thumb_ipad.jpg',
        created_by: 2
      },
      
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('masters', null, {});
  }
};
