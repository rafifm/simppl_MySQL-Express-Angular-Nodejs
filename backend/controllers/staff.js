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
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};