const { Sequelize } = require("sequelize");
const db = new Sequelize("jorge", "root", "jorge@@2023", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
