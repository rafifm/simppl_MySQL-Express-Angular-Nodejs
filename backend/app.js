const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const db = require("./models/dbmysql");

// const peran = db.peran;
// const pengguna = db.pengguna;
// var bcrypt = require("bcryptjs");
const PORT = process.env.PORT || 4000;
var corsOptions = {
  origin: "http://localhost:4000"
};

// app.use(cors());
// app.listen(PORT);
app.use('/',express.static(path.join(__dirname,'dist')));

app.get('/',(req, res, next) => {
  res.sendFile(path.join(__dirname,'dist','index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/staff")(app);
require("./routes/guru")(app);
require("./routes/mhs")(app);
require("./routes/datasekolah")(app);
require("./routes/akundosen")(app);
require("./routes/nilai")(app);
require("./routes/auth.routes")(app);
require("./routes/pengguna.routes")(app);

db.databaseConf.sync().then(() => {
  console.log( 'server jalan di port: '+ PORT);
// initial();
});

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Auth-Token, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

// function initial(){
//   pengguna.create({
//     email_pengguna: "admin@admin",
//     password_pengguna: bcrypt.hashSync("12345", 8)
//   }).then(pengguna => {
//     peran.findAll({
//       where: {nama_peran: "admin"}
//     }).then(peran => {
//       pengguna.setPerans(peran).then(() =>{
//         console.log( "registrasi berhasil");
//       }).catch(err => {
//         console.log('set peran gagal'+err);
//       });
//     }).catch(err=> {
//       console.log('cari peran'+ err);
//     });
//   }).catch(err=> {
//     console.log('buat admin gagal'+err);
//   });
//   peran.create({
//     id: 1,
//     nama_peran: "admin"
//   });

//   peran.create({
//     id: 2,
//     nama_peran: "dosen"
//   });

//   peran.create({
//     id: 3,
//     nama_peran: "guru"
//   });

//   peran.create({
//     id: 4,
//     nama_peran: "kaprodi"
//   });

//   peran.create({
//     id: 5,
//     nama_peran: "koorsekolah"
//   });

//   peran.create({
//     id: 6,
//     nama_peran: "staff"
//   });

//   peran.create({
//     id: 7,
//     nama_peran: "mahasiswa"
//   });
// }

module.exports = app;
