require("dotenv").config();

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAMEssss,
  process.env.PASSWORD, // Corrige el nombre de la variable a PASSWORD
  {
    port: process.env.PORTS,
    host: process.env.HOST, // Utiliza variables de entorno para host y dialect también si es necesario
    dialect: process.env.DIALECT,
  }
);
console.log(process.env.DATABASE);
console.log(process.env.HOST);
console.log(process.env.DIALECT);
console.log(process.env.USERNAMEssss);
console.log(process.env.PASSWORD);
console.log(process.env.PORTS);

module.exports = db;
