module.exports = app => {
  const staff = require("../controllers/staff.js");

  var router = require("express").Router();

  // Create a new Customer
  router.post("/buat", staff.create);

  app.use("/api/staff", router);
};