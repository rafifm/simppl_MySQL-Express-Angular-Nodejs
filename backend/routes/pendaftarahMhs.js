const express = require("express");
const PendaftaranMhs = require("../models/pendaftaranmhs");

const router = express.Router();

router.post("", (req, res, next) => {
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

router.delete("/:id", (req, res,next) => {
  PendaftaranMhs.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: " Post terhapus"});
  });

});

module.exports = router;
