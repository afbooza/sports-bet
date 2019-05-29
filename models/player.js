'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
    Player.hasMany(models.Song, {
      foreignKey:'id'
    })
  };

  //Player.sync({force:true});
  return Player;
};