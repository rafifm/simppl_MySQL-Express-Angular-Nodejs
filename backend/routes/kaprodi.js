module.exports = app => {
  const kaprodi = require("../controllers/kaprodi/profilKaprodi");

  var router =require("express").Router();

  router.post("/tambah/:idKaprodi", kaprodi.tambahProfil);

  app.use("/api/kaprodi", router);
}