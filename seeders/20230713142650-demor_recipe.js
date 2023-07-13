'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert('Recipe_Tables',[{
      title:"aha",
      description:"Hi",
    ingredients:"123",
    instructions: "sadas",
    createdAt:new Date(),
    updatedAt:new Date(),
     id:1,
 }
] 
)
},

  down:async (queryInterface, Sequelize)=> {
    await queryInterface.bulkDelete('Recipe_Tables',null,{});
  }
};
