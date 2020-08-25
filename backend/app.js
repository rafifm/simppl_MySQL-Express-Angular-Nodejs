const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const db = require("./models/dbmysql");

const mongoose = require("mongoose");
// const mysql = require("mysql");

const pendaftaranMhsRoutes = require("./routes/pendaftaranMhs");
const userRoutes = require("./routes/user");
const dosenRoutes = require("./routes/datadosen");

const app = express();

mongoose.connect(
    "mongodb+srv://rafif:mkGq2uhkmCpiVZQG@simppl-xgalo.mongodb.net/simppl",
    { useNewUrlParser: true , useUnifiedTopology: true}
  ).then(() => {
    console.log("Database berhasil terkoneksi");
  }).catch(() => {
    console.log("Koneksi gagal");
  });

// var corsOptions = {
//   origin: "http://localhost:4000"
// };

// app.use(cors(corsOptions));
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
app.use("/api/dosen", dosenRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

db.databaseConf.sync();

const PORT = process.env.PORT || 4000;

require("./routes/staff")(app);
require("./routes/guru")(app);
require("./routes/mhs")(app);
require("./routes/datasekolah")(app);
app.listen(PORT, () => {
  console.log("server jalan di port : " + PORT);
});

module.exports = app;
