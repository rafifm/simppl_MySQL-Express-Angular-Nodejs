const db = require("../models/dbmysql");
const Staff = db.staff;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  //validate request
  if(!req.body.nama_staff){
    res.status(400).send({
      message:"tidak boleh kosong"
    });
    return;
  }

  //buat akun staff
  const staff = {
    nama_staff: req.body.nama_staff,
    email_staff: req.body.email_staff,
    pass_staff: req.body.pass_staff
  };

  //simpan akun ke database
  Staff.create(staff)
    .then(akun => {
      res.send(akun);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "ada error saat buat akun"
      });
    });
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nama_staff = req.query.nama_staff;
  var condition = nama_staff ? { nama_staff: { [Op.like]: `%${title}%`}} : null;

  Staff.findAll({ where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error waktu ngambil data staff"
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Staff.findByPk(id)
    .then(staff => {
      res.send(staff);
    })
    .catch(err => {
      res.status(500).send({
        message: "error mengambil akun staff dengan id"
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Staff.update(req.body, {
    where: {id: id}
  })
    .then(num => {
      if(num == 1) {
        res.send({
          message: "Akun staff sdh diupdate"
        });
      } else {
        res.send({
          message: `tidak bisa update staff dengan id=${id} `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "update error dengan id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Staff.destroy({
    where: { id: id}
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Akun staff sudah dihapus"
        });
      } else {
        res.send({
          message: `gabisa hapus akun staff dengan id=${id}.`
        });
      }
    })
      .catch(err => {
        res.status(500).send({
          message: "gabisa delete akun staff id=" + id
        });
      });
};

// Delete all staff from the database.
exports.deleteAll = (req, res) => {
  Staff.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} akun staff sdh dihapus`})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error waktu menghapus"
      });
    });
};