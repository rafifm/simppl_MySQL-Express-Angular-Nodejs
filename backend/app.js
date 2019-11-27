const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

<<<<<<< HEAD
const pendaftaranMhsRoutes = require("./routes/pendaftarahMhs");
=======
const pendaftaranMhsRoutes = require("./routes/pendaftaranMhs");
>>>>>>> 794ee415bddd5ce679af5ec1acf186cf4760f49a

const app = express();

mongoose.connect(
    "mongodb+srv://rafif:mkGq2uhkmCpiVZQG@simppl-xgalo.mongodb.net/simppl",
    { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
    console.log("Database berhasil terkoneksi");
  })
  .catch(() => {
    console.log("Koneksi gagal");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", pendaftaranMhsRoutes);

module.exports = app;
