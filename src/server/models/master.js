'use strict';
module.exports = (sequelize, DataTypes) => {
  const master = sequelize.define('master', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  master.associate = function(models) {
    // associations can be defined here
  };
  return master;
};