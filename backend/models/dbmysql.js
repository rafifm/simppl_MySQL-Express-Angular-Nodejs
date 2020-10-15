const dbconfig = require("../config/db.config.mysql");
const Sequelize = require("sequelize");

const database = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD,
  {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle
    }
  }
);

const db = { };

db.Sequelize = Sequelize;
db.databaseConf = database;

db.staff = require("./staff") (database, Sequelize);
db.guru = require("./guru") (database, Sequelize);
db.mhs = require("./mhs") (database, Sequelize);
db.sekolah = require("./datasekolah") (database, Sequelize);
db.akundosen = require("./akundosen") (database,Sequelize);

db.sekolah.hasMany(db.mhs,{ foreignKey: 'idSklh' });
db.mhs.belongsTo(db.sekolah,{ foreignKey: 'idSklh' });

db.mhs.hasMany(db.akundosen, { foreignKey: 'idMhs'});
db.akundosen.belongsTo(db.mhs, { foreignKey: 'idMhs'});

module.exports = db ;