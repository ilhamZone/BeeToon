'use strict';
module.exports = (sequelize, DataTypes) => {
  const img_episode = sequelize.define('img_episode', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    masters_id: DataTypes.INTEGER,
    episodes_id: DataTypes.INTEGER
  }, {});
  img_episode.associate = function(models) {
    // associations can be defined here\
    img_episode.belongsTo(models.user, {
      as: 'CreatedBy',
      foreignKey: 'created_by'
    });
    img_episode.belongsTo(models.master, {
      as: 'Master',
      foreignKey: 'masters_id'
    });
    img_episode.belongsTo(models.episode, {
      as: 'Episode',
      foreignKey: 'episodes_id'
    });
  };
  return img_episode;
};
