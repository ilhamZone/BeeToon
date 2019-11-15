'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('img_episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      masters_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'masters',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      episodes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'episodes',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('img_episodes');
  }
};