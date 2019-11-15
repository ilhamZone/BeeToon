'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    masters_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER
  }, {});
  episode.associate = function (models) {
    // associations can be defined here
    episode.belongsTo(models.user, {
      as: 'CreatedBy',
      foreignKey: 'created_by'
    });
    episode.belongsTo(models.master, {
      as: 'Master',
      foreignKey: 'masters_id'
    });
  };
  return episode;
};
