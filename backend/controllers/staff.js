const Staff = require("../models/staff");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const staff = new Staff({
    nama: req.body.nama,
    email: req.body.email,
    password: req.body.password,
  });

  // Save Customer in the database
  Staff.create(staff, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};