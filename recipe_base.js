const {Model, DataTypes}= require('sequelize');
const sequelize= require('../config/connection');

class Recipe_Base extends Model{}

Recipe_Base.init(
{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    title:{type:DataTypes.STRING,allowNull:false},
    description:DataTypes.TEXT,
    ingredients:DataTypes.TEXT,
    instructions:DataTypes.TEXT,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE,

},{
    sequelize,
    modelName: 'JobApplication',
});
module.exports=Recipe_Base