'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    plays: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here    
  };
  return Song;
};