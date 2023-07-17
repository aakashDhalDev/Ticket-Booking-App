'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{
        foreignKey: 'airplandeId',
        onDelete: 'CASCADE'
      })
    }
  }
  Airplane.init({
    modelNumber: {
      type:DataTypes.STRING,
      allowNull:false
    },
    capacity:{
      type:DataTypes.INTEGER,
      validate:{
        min:50,
        max:1500
      }
    } 
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};