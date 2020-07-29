module.exports = app => {
  const staff = require("../controllers/staff.js");

  var router = require("express").Router();

  // Create a new Customer
  router.post("/buat", staff.create);

  //Retrieve all staff
  router.get("/", staff.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", staff.findOne);

  // Update a Tutorial with id
  router.put("/:id", staff.update);

  // Delete a Tutorial with id
  router.delete("/:id", staff.delete);

  // Create a new Tutorial
  router.delete("/", staff.deleteAll);

  app.use("/api/staff", router);
};