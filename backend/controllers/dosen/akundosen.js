const db = require("../../models/dbmysql");
const dbAkunDosen = db.akundosen;
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
  const dataDosen = {
    nama_dosen: req.body.nama_dosen,
    nidn: req.body.nidn,
  }

  dbAkunDosen.create(dataDosen)
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
    .then(num => {
      if(num == 1 ) {
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