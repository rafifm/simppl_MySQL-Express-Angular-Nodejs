const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: " Pendaftaran berhasil"
  });
});

app.get("/api/posts",(req, res, next) => {
  const posts = [
    { 
      id: '1234', 
      nama: 'rafif', 
      nim: '232323', 
      ipk: '222', 
      nokwitansi: '5443534'
    },
    { 
      id: '2345', 
      nama: 'konta', 
      nim: '232323', 
      ipk: '222', 
      nokwitansi: 'asdad5443534'
    }
  ];
  res.status(200).json({
    message: 'Data berhasil diupload',
    posts: posts
  });
});

module.exports = app;