'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable('Recipe_Tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        validate: {
          len: [3, 255] // Minimum length of 3 characters
        }
      },
      description: {
        type: Sequelize.STRING,
        validate: {
          len: [1, 500] // Maximum length of 500 characters
        }
      },
      instructions: {
        type: Sequelize.STRING,
        validate: {
          len: [1, 5000] // Maximum length of 5000 characters
        }
      },
      ingredients: {
        type: Sequelize.STRING,
        validate: {
          len: [1, 1000] // Maximum length of 1000 characters
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.dropTable('Recipe_Tables');
  }
};