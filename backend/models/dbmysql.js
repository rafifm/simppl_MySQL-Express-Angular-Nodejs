const dbconfig = require("../config/config.js");
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
db.kaprodi = require("./kaprodi") (database, Sequelize);

//sekolah one to many mahasiswa
db.sekolah.hasMany(db.mhs,{ foreignKey: 'idSklh' });
db.mhs.belongsTo(db.sekolah,{ foreignKey: 'idSklh' });

//mahasiswa one to many dosen
db.akundosen.hasMany(db.mhs, { foreignKey: 'idDsnMhs'});
db.mhs.belongsTo(db.akundosen, { foreignKey: 'idDsnMhs'});

//pengguna one to one dosen
db.pengguna.hasOne(db.akundosen);
db.akundosen.belongsTo(db.pengguna);

//pengguna one to one guru
db.pengguna.hasOne(db.guru);
db.guru.belongsTo(db.pengguna);

//pengguna one to one staff
db.pengguna.hasOne(db.staff);
db.staff.belongsTo(db.pengguna);

//pengguna one to one mahasiswa
db.pengguna.hasOne(db.mhs);
db.mhs.belongsTo(db.pengguna);

//pengguna one to one kaprodi
db.pengguna.hasOne(db.kaprodi);
db.kaprodi.belongsTo(db.pengguna);

//mhs one to one nilai
db.nilai.hasOne(db.mhs);
db.mhs.belongsTo(db.nilai);

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