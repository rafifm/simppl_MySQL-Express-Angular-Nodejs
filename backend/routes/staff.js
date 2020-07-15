module.exports = app => {
  const staff = require("../controllers/");

  // Create a new Customer
  app.post("/staff", staff.create);
};