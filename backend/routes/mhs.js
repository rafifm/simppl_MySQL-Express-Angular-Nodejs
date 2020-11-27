module.exports = app => {
  const mhs = require( "../controllers/mhs/akunmhs.js");
  var router = require( "express").Router();

  router.post("/buat", mhs.create);

  router.get("/", mhs.findAll);

  router.get("/penempatan", mhs.ambilMhsSekolah);

  router.get("/:id", mhs.findOne);

  router.put("/:id", mhs.update);

  router.put("/profil/:idPengguna", mhs.tambahMhs);

  router.put("/nilaiuas/:idMhsnilai", mhs.nilaiUas);

  router.put("/nilaiuts/:idMhsnilai", mhs.nilaiUTS);

  router.get("/:idmhs/:idSekolah", mhs.insertSekolah);

  router.delete("/:id", mhs.delete);

  router.delete("/", mhs.deleteAll);

  app.use("/api/mhs", router);
};