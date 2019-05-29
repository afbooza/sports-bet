'use strict';
module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define('League', {
    title: DataTypes.STRING,
  }, {});
  League.associate = function(models) {
    // associations can be defined here
    League.hasMany(models.Player, {
      foreignKey: 'id'
    })
  };

  //League.sync({force: true})

  return League;
};