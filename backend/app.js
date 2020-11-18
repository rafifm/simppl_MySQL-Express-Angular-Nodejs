const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const http = require("http");

const app = express();

const db = require("./models/dbmysql");
const { Http2ServerRequest } = require("http2");
const peran = db.peran;

var corsOptions = {
  origin: "http://localhost:4000"
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname + "dist")));
app.get('/',(req, res, next) => {
  res.sendFile(path.join(__dirname + "dist/index.html"));
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

db.databaseConf.sync().then(() => {
   http.createServer(app).listen(app.get('port'),() => {
     console.log( 'server jalan di port: '+ app.get('port'));
   });
  // initial();
});

// function initial(){
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

require("./routes/staff")(app);
require("./routes/guru")(app);
require("./routes/mhs")(app);
require("./routes/datasekolah")(app);
require("./routes/akundosen")(app);
require("./routes/nilai")(app);
require("./routes/auth.routes")(app);
require("./routes/pengguna.routes")(app);

module.exports = app;
