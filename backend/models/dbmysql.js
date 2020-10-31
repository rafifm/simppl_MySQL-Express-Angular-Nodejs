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
db.nilai = require("./nilai") (database, Sequelize);
db.peran = require("./peran") (database, Sequelize);
db.pengguna = require("./pengguna") (database, Sequelize);

//sekolah one to many mahasiswa
db.sekolah.hasMany(db.mhs,{ foreignKey: 'idSklh' });
db.mhs.belongsTo(db.sekolah,{ foreignKey: 'idSklh' });

//mahasiswa one to many dosen
db.akundosen.hasMany(db.mhs, { foreignKey: 'idDsnMhs'});
db.mhs.belongsTo(db.akundosen, { foreignKey: 'idDsnMhs'});

//pengguna one to one dosen
db.akundosen.hasOne(db.pengguna);
db.pengguna.belongsTo(db.akundosen);

//pengguna many to many peran
db.peran.belongsToMany(db.pengguna, {
  through: "pengguna_peran",
  foreignKey: "peranId",
  otherKey: "penggunaId"
});
db.pengguna.belongsToMany(db.peran, {
  through: "pengguna_peran",
  foreignKey: "penggunaId",
  otherKey: "peranId"
});

db.PERAN = ["dosen", "admin", "guru", "mhs", "kaprodi", "koorsekolah", "staff"];

module.exports = db ;