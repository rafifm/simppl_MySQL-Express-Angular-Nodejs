const mysql = require('mysql');

var dbmysql = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "simppl"
});

module.exports = dbmysql;