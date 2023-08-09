# Recipe
# Description
Building a Recipe Management System with Sequelize, we worked on a project to build a recipe management system using Node.js, Express.js, and Sequelize. Our task was to implement the CRUD functionality and server-side data validation using Sequelize.

# First
Going to the terminal to make a directory called: "Recipe-Management-System-Sequelize".                                                                             
#Second, 
-go to the directory using cd Recipe-Management-System-Sequelize then run the code. to go to VS.                                                            
# Then  running:                                                                                                                                                                          
npm init -y     //to initialize a new Node.js.                                                                                                                                                           
# Then  running:                                                                                                                                                          
npm install express             // to install Express.js.                                                                                                                                                           
# Then:                                                                                                                                                          
touch R-server.js          //to make R-sever.js.                                                                                                                                                          
# Then:                                                                                                                                                    
 import express.js  + create an instance + make a port to work on it.                                                                                                                                                          
# Then
-CREATE ROLE Recipe_user  WITH LOGIN PASSWORD '1j2p3b';+ ALTER ROLE Recipe CREATEDB;+ \du        // to create a new user and                            
#Then: 
-create a Database recipe_base + changing the owner + install pg + make the .env file.                                                                                                                                                       
# Then:
-installing sequelize using pg-hstore and set up sequelize using sequelize-cli init                                                                
-Changing config.json to config.js to require the data in .env     + update module/index.js (finishing all the setup)
 -preparing the recipe_base and module it                                    
## then generate the recipe_table using the commend npx sequelize-cli model:generate --name Recipe_Table --attributes id:integer,title:string,description:string,ingredients:string,instructions:string,createdAt:string,updateAt:string

-made the database during the postgras+ npm i dotenv +                                                                                                                                                     
-npx sequelize-cli seed:generat --name demo_recipe;    //genrating the demo_recipe (The seeders)                                                                                                                                                        
-Trying the seeder Writing some of the info inside it + using the commend (npx sequelize-cli db:seed:all)                                                                                                                                      
## 4
making the CRUD (GET, POST, PATCH, and DELETE )                                                                                                                                                            
At the end modify the length of each one in the migration using validate{len[min,max]} then doing undo:all to delete all the Tables then recreating them                                                                                                                                                                                                                                                                                                          P ##Push it to github  
Thanks
