'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('img_episodes', [
      {
        page: 1,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/002.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 2,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/004.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 3,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/005.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 4,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/006.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 1
      },
      {
        page: 1,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/007.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 2
      },
      {
        page: 2,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/008.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 2
      },
      {
        page: 3,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/009.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 2
      },
      {
        page: 1,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/010.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 3
      },
      {
        page: 2,
        image: 'https://mangaku.co/mirrorv2/manga/K/kimetsu-no-yaiba/040/020.jpg',
        created_by: 1,
        masters_id: 1,
        episodes_id: 3
      },
      {
        page: 1,
        image: 'https://obs.line-scdn.net/0h3dOWG0rEbEtyLkddWX0THEh4byRBQn9IFhg9VSJAMn8KGCseSUkmfl4nMigLTCsVG0gnKVcmd3oPTn4YHB8m/w644',
        created_by: 1,
        masters_id: 2,
        episodes_id: 1
      },
      {
        page: 2,
        image: 'https://obs.line-scdn.net/0h6sUUUpofaVxoLEJKQ2cWC1J6ajNbQHpfDBo4QjhCN2gQGi4JU0p0aUQlMD4XSS4CAUoiM0klcm0VTHsPAUt0/w644',
        created_by: 1,
        masters_id: 2,
        episodes_id: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('img_episodes', null, {});
  }
};
