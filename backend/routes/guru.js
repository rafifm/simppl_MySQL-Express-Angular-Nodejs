module.exports = app => {
  const guru = require( "../controllers/guru.js");
  var router = require( "express").Router();

  router.post("/buat", guru.create);

  router.get("/", guru.findAll);

  router.get("/:id", guru.findOne);

  router.put("/:id", guru.update);

  router.delete("/:id", guru.delete);

  router.delete("/", guru.deleteAll);

  app.use("/api/guru", router);
};