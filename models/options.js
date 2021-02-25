'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  options.init({
    optionText: DataTypes.STRING,
    nextEncounter: DataTypes.INTEGER,
    consequence: DataTypes.STRING,
    tResult: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'options',
  });
  return options;
};