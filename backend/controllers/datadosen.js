const datadosen = require("../models/datadosen");

exports.tambahdosen = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const datadsn = new datadosen ({
    nama: req.body.nama,
    nip: req.body.nip,
    imagePath: url + "/images/" + req.file.filename
  });
  datadsn.save().then(databaru => {
    res.status(201).json ({
      message: "input data dosen berhasil",
      datadsn: {
        nama: databaru.nama,
        nip: databaru.nip,
        imagePath: databaru.imagePath
      }
    });
  });
}

exports.editdosen = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if(req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.filename;
  }

  const datadsn = new datadosen({
    _id: req.body,
    nama: req.body.nama,
    nip: req.body.nip,
    imagePath: imagePath
  });

  datadsn.updateOne({_id: req.params.id}, datadsn)
    .then(result => {
      res.status(200).json({message: "update berhasil"});
    })
    .catch(error => {
      res.status(500).json({
        message: "edit gagal"
      });
    });
};

exports.tampildsn = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = datadsn.find();
  let fetchedPosts;
  if(pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  postQuery.then(hasil => {
    fetchedPosts = hasil
      return datadsn.count();
  }).then (hitung => {
    res.status(200).json({
      message: "data berhasil diambil",
      datadsn: fetchedPosts,
      maxPosts: hasil
    })
  });
}

exports.tampildsnid = (req, res, next) => {
  datadosen.findById(req.params.id)
    .then(data => {
      if(data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Data tidak ditemukan"});
      }
    }) .catch ( error => {
      res.status(500).json({
        message: "mengambil data gagal"
      });
    });
};

exports.hapusdsn = (req, res, next) => {
  datadosen.deleteOne({ _id: req.params.id})
    .then (hasil => {
      console.log(hasil);
      if(hasil.n > 0) {
        res.status(200).json({ message: "berhasil dihapus"});
      } else {
        res.status(401).json({ message: "belum login"})
      }
    }) .catch( error => {
      res.status(500).json({
        message: "gagal menghapus"
      });
    });
};