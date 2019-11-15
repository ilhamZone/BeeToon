'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourite = sequelize.define('favourite', {
    id_users: DataTypes.INTEGER,
    id_masters: DataTypes.INTEGER,
    is_favorite: DataTypes.INTEGER
  }, {});
  favourite.associate = function(models) {
    // associations can be defined here
    favourite.belongsTo(models.user, {
      as: 'User',
      foreignKey: 'id_users'
    });
    favourite.belongsTo(models.master, {
      as: 'Master',
      foreignKey: 'id_masters'
    });
  };
  return favourite;
};
