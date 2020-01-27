const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mysql = require("mysql");

const pendaftaranMhsRoutes = require("./routes/pendaftaranMhs");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect(
    "mongodb+srv://rafif:mkGq2uhkmCpiVZQG@simppl-xgalo.mongodb.net/simppl",
    { useNewUrlParser: true , useUnifiedTopology: true}
  ).then(() => {
    console.log("Database berhasil terkoneksi");
  }).catch(() => {
    console.log("Koneksi gagal");
  });

// dbmysql.connect((err) => {
//   if (err) throw err;
  
//   let sql = `INSERT INTO pendaftaranmhs (nama, nim, ipk, nokwitansi, foto_mhs, id_mhs, email, password_mhs) VALUES ('a', '2', '2', '2', 'a', '2', 'a', 'a')`;

//   dbmysql.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("1 baris dimasukkan");
//   });
// });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", pendaftaranMhsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
