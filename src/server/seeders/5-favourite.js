'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favourites', [
      {
        id_users: 1,
        id_masters: 1,
        is_favorite: 1
      },
      {
        id_users: 1,
        id_masters: 2,
        is_favorite: 1
      },
      {
        id_users: 2,
        id_masters: 1,
        is_favorite: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favourites', null, {});
  }
};
