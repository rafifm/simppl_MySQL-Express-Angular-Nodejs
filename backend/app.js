const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PendaftaranMhs = require("./models/pendaftaranmhs");

const app = express();

mongoose.connect(
    "mongodb+srv://rafif:mkGq2uhkmCpiVZQG@simppl-xgalo.mongodb.net/simppl?retryWrites=true&w=majority",
    { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
    console.log("Database berhasil terkoneksi");
  })
  .catch(() => {
    console.log("Koneksi gagal");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new PendaftaranMhs({
    nama: req.body.nama,
    nim: req.body.nim,
    ipk: req.body.ipk,
    nokwitansi: req.body.nokwitansi,
  });
  post.save().then(postBaru => {
    res.status(201).json({
      message: " Pendaftaran berhasil",
      postId: postBaru._id
    });
  });
  
});

app.get("/api/posts",(req, res, next) => {
  PendaftaranMhs.find()
    .then(documents => {
      res.status(200).json({
        message: 'Data berhasil diupload',
        posts: documents
      });
    });
  
});

app.delete("/api/posts/:id", (req, res,next) => {
  PendaftaranMhs.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: " Post terhapus"});
  });
  
});

module.exports = app;