const db = require("../../models/dbmysql");
const dbAkunDosen = db.akundosen;
const dbMhs = db.mhs;
const dbSekolah = db.sekolah;
const dbPengguna = db.pengguna;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? + size : 3;
  const offset = page ? page * limit : 0;

  return { offset, limit };
}

const getPagingData = (data, page, limit) => {
  const { count: totalAkunDosen, rows: akundosen} = data;
  const halamanSekarang = page ? + page : 0;
  const totalHalaman = Math.ceil(totalAkunDosen/limit);

  return { totalAkunDosen, akundosen, totalHalaman, halamanSekarang };
}

exports.create = (req, res) => {
  if(!req.body.nama_dosen) {
    res.status(400).send({
      message: " input kosong "
    });
    return;
  }

  dbAkunDosen.create({
    nama_dosen: req.body.nama_dosen,
    nip: req.body.nip,
    no_hp_dosen: req.body.no_hp_dosen,
    pangkat_dosen: req.body.pangkat_dosen,
  })
  .then(akundosen => {
    res.send(akundosen);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "error saat pembuatan akun"
    });
  });
};

exports.findAll = (req, res) => {
  const { page, size, nama_dosen } = req.query;
  var condition = nama_dosen? { nama_dosen: {[Op.like]: `%${nama_dosen}`}} : null;
  const { limit, offset } =getPagination(page, size);

  dbAkunDosen.findAndCountAll ({ where: condition, limit, offset})
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
      console.log('dosen' + data);
    })
    .catch(err => {
      res.status(500).send({
        message: 
          err.message || "error pengambilan data"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  dbAkunDosen.findByPk(id)
    .then(akunMhs => {
      res.send(akunMhs);
    })
    .catch(err => {
      res.status(500).send({
        message: "error pengambilan mhs dengan id"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  dbAkunDosen.update(req.body, {
    where: {id: id}
  })
    .then(ubah => {
      console.log(ubah);
      if(ubah == 1 ) {
        res.send({
          message: "Akun mhs telah terupdate"
        });
      } else {
        res.send ({
          message: `tidak bisa update akun dengan id =${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "update error dengan id= " + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  dbAkunDosen.destroy({
      where: { id: id}
  })
  .then(num => {
      if (num == 1){
          res.send({
              message: "akun mahasiswa sdh dihapus"
          });
      } else {
          res.send({
              message: `Gagal menghapus akun mahasiswa dengan id = ${id}.`
          });
      }
  })
  .catch(err => {
      res.status(500).send ({
          message: "gagal delete akun mahasiswa id = "+ id
      });
  });
};

exports.deleteAll = (req, res) => {
  dbAkunDosen.destroy({
      where: {},
      truncate: false
  })
      .then(num => {
          res.send({ message: `${num} akun mhs sdh dihapus`})
      })
      .catch(err => {
          res.status(500).send({
              message: 
                  err.message || "error dalam proses penghapusan"
          });
      });
};

exports.tambahDosen = (req, res) => {
  if(!req.body.nama_dosen) {
    res.status(400).send({
      message: " input kosong "
    });
    return;
  }
  dbAkunDosen.create({
    nama_dosen: req.body.nama_dosen,
    nip: req.body.nip,
    no_hp_dosen: req.body.no_hp_dosen,
    pangkat_dosen: req.body.pangkat_dosen,
  })
  .then(akundosen => {
    console.log(akundosen);
    return dbPengguna.findOne({
      where: { id: req.params.idPengguna}
    }).then(pengguna => {
      pengguna.setAkundosen(akundosen.id);
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "error saat pembuatan akun"
    });
  });
}

exports.insertMhs = (req, res) => {
  dbAkunDosen.findOne({
    where: { id: req.params.idDsn }
  }).then(dosen => {
    return dbMhs.findOne({
      where: {id: req.params.idMhs}
    }).then(mhs => {
      dosen.setMahasiswa(mhs);
      res.send(dosen);
    });
  }).catch(err => {
    res.status(500).send({
      message: "error insert mhs " + err
    });
  });
}

exports.ambilDosenMhs = (req, res) => {
  const { page, size, nama_dosen } = req.query;
  var condition = nama_dosen? { nama_dosen: {[Op.like]: `%${nama_dosen}`}} : null;

  return dbAkunDosen.findAll({
    where: condition,
    include: [{model: dbMhs, include:[dbSekolah]}]
  }).then(mahasiswa => {
    res.send(mahasiswa)
  }).catch(err => {
    res.status(500).send({message: err.message || "error pengambilan datanya"});
  });

}

exports.ambilDosenNilai = (req, res) => {
  console.log('id pengguna nih: ' + req.params.idPengguna);
  dbAkunDosen.findAll({
    where: { id: req.params.idPengguna },
    include: [{ model: dbMhs, required: false}]
  }).then(dosen => {
    // if(dosen.idMhs == null){
    //   dosen.idMhs = 'kosong'
    // }
    console.log('nilai ' + dosen);
    res.send(dosen)
  }).catch(err => {
    res.status(500).send({message: err.message || "mengambil dosen error"});
  })
}