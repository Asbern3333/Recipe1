'use strict';
const {Model, INTEGER} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe_Table extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Recipe_Table.init({

    id: {primaryKey:true,
   type: DataTypes.INTEGER,
   },
    title:{type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    ingredients: {type: DataTypes.STRING},
    instructions: {type: DataTypes.STRING},
    createdAt: {type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE},
  }, {
    sequelize,
    modelName: 'Recipe_Table',
    tableName: 'Recipe_Tables'
  });
  return Recipe_Table;
};