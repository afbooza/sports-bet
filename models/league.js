'use strict';
module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('League', {
    title: DataTypes.STRING
  }, {});
  League.associate = function(models) {
    // associations can be defined here
  };
  return League;
};