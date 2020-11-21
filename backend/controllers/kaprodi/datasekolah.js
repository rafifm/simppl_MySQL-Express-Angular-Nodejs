const db = require("../../models/dbmysql");
const dbSekolah = db.sekolah;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? + size : 3;
  const offset = page ? page * limit : 0;

  return { offset, limit };
}

const getPagingData = (data, page, limit) => {
  const { count: totalSekolah, rows: sekolah} = data;
  const halamanSekarang = page ? + page : 0;
  const totalHalaman = Math.ceil(totalSekolah/limit);

  return { totalSekolah, sekolah, totalHalaman, halamanSekarang };
}

exports.create = (req, res) => {
  if(!req.body.nama_sekolah) {
    res.status(400).send({
      message: " input kosong "
    });
    return;
  }
  const dataSekolah = {
    nama_sekolah: req.body.nama_sekolah,
    kuotamhs: req.body.kuotamhs
  }

  dbSekolah.create(dataSekolah)
    .then(akunSekolah => {
      res.send(akunSekolah);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error saat pembuatan akun"
      });
    });
};

exports.findAll = (req, res) => {
  const { page, size, nama_sekolah } = req.query;
  var condition = nama_sekolah? { nama_sekolah: {[Op.like]: `%${nama_sekolah}`}} : null;
  const { limit, offset } =getPagination(page, size);

  dbSekolah.findAndCountAll ({ where: condition, limit, offset})
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
  dbSekolah.findByPk(req.params.id)
    .then(akunSekolah => {
      res.send(akunSekolah);
    })
    .catch(err => {
      res.status(500).send({
        message: "error pengambilan mhs dengan id"
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  dbSekolah.update(req.body, {
    where: {id: id}
  })
    .then(status => {
      if(status == 1 ) {
        res.send({
          message: "Akun Sekolah telah terupdate"
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

  dbSekolah.destroy({
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
  dbSekolah.destroy({
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

