const PendaftaranMhs = require("../models/pendaftaranmhs");

exports.tambahmhs = (req, res, next) => {
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
        message: " Pendaftaran berhasil ini",
        post: {
          // id: postBaru._id,
          nama: postBaru.nama,
          nim: postBaru.nim,
          ipk: postBaru.ipk,
          nokwitansi: postBaru.nokwitansi,
          imagePath: postBaru.imagePath
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "daftar gagal"
      });
    });
  }

exports.editmhs = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.filename;
  }
  const post = new PendaftaranMhs({
    _id: req.body.id,
    nama: req.body.nama,
    nim: req.body.nim,
    ipk: req.body.ipk,
    nokwitansi: req.body.nokwitansi,
    imagePath: imagePath
  });
  PendaftaranMhs.updateOne({_id: req.params.id}, post)
    .then(result => {
      if(result.nModified > 0) {
        res.status(200).json({ message: "update sukses"});
      } else {
        res.status(401).json({ message: "not authorized"});
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "gagal update"
      });
    });
};

exports.tampilmhs = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
  
    const postQuery = PendaftaranMhs.find();
    let fetchedPosts;
    if(pageSize && currentPage) {
      postQuery
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
    }
    postQuery.then(dokumen => {
      fetchedPosts = dokumen
        return PendaftaranMhs.estimatedDocumentCount();
      })
      .then(count => {
        res.status(200).json({
          message: "post berhasil diambil",
          posts: fetchedPosts,
          totalHalaman: count
        })
      })
      .catch(error => {
        res.status(500).json({
          message: "gagal ngambil data"
        });
      });
  }

exports.tampilmhsid = (req, res, next) => {
  PendaftaranMhs.findById(req.params.id).then(udata => {
    if(udata) {
      res.status(200).json(udata);
    } else {
      res.status(404).json({ message: "data tidak ada"})
    }
  }).catch(error => {
    res.status(500).json({
      message: "gagal ngambil data"
    });
  });
  }

exports.hapusmhs = (req, res,next) => {
    PendaftaranMhs.deleteOne({_id: req.params.id}).then(result => {
      console.log(result);
      if ( result.n > 0) {
        res.status(200).json({ message: "terhapus"});
      } else {
        res.status(401).json({ message: "blum login"});
      }
    }).catch(error => {
      res.status(500).json({
        message: "gagal ngambil data"
      });
    });
  }