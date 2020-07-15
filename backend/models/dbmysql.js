const mysql = require("mysql");
const dbconfig = require("../config/db.config.mysql");

var connection = mysql.createPool({
  host: dbconfig.HOST,
  user: dbconfig.USER,
  password: dbconfig.PASSWORD,
  database: dbconfig.DB
});

module.exports = connection;