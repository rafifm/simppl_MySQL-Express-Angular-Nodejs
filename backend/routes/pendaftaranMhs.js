const express = require("express");
const multer = require("multer");

const PendaftaranMhs = require("../models/pendaftaranmhs");

const router = express.Router();

const MIME_TYPE_MAP ={
  'image/png' : 'png',
  'image/jpeg' : 'jpg',
  'image/jpg' : 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

router.post("", multer({storage: storage}).single("image"),(req, res, next) => {
  const url = req.protocol + '://' + req.get("host");
  const post = new PendaftaranMhs({
    nama: req.body.nama,
    nim: req.body.nim,
    ipk: req.body.ipk,
    nokwitansi: req.body.nokwitansi,
    imagePath: url + "/images/" + req.file.filename
  });
  post.save().then(postBaru => {
    res.status(201).json({
      message: " Pendaftaran berhasil",
      post: {
        id: postBaru._id,
        nama: postBaru.nama,
        nim: postBaru.nim,
        ipk: postBaru.ipk,
        nokwitansi: postBaru.nokwitansi,
        imagePath: postBaru.imagePath
      }
    });
  });

});

router.put("/:id", (req, res, next) => {
  const post = new PendaftaranMhs({
    _id: req.body.id,
    nama: req.body.nama,
    nim: req.body.nim,
    ipk: req.body.ipk,
    nokwitansi: req.body.nokwitansi
  })
  PendaftaranMhs.updateOne({_id: req.params.id}, post).then(result => {
    console.log(result);
    res.status(200).json({message: "update berhasul"});
  });
});

router.get("",(req, res, next) => {
  PendaftaranMhs.find()
    .then(documents => {
      res.status(200).json({
        message: 'Data berhasil diupload',
        posts: documents
      });
    });
});

router.get("/:id", (req, res, next) => {
  PendaftaranMhs.findById(req.params.id).then(post => {
<<<<<<< HEAD:backend/routes/pendaftarahMhs.js
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Postingan tidak ditemukan"});
=======
    if(post){
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post gak ada "});
>>>>>>> 794ee415bddd5ce679af5ec1acf186cf4760f49a:backend/routes/pendaftaranMhs.js
    }
  });
});

router.delete("/:id", (req, res,next) => {
  PendaftaranMhs.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: " Post terhapus"});
  });

});

module.exports = router;
