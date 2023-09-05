require("dotenv").config();

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAMEssss,
  process.env.PASSWORD, // Corrige el nombre de la variable a PASSWORD
  {
    host: process.env.HOST, // Utiliza variables de entorno para host y dialect también si es necesario
    dialect: process.env.DIALECT,
  }
);
console.log(process.env.PASSWORD);

module.exports = db;
