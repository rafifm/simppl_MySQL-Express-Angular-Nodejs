module.exports = app => {
    const sekolah = require( "../controllers/kaprodi/datasekolah.js");
    var router = require( "express").Router();
  
    router.post("/buat", sekolah.create);
  
    router.get("/", sekolah.findAll);
  
    router.get("/:id", sekolah.findOne);
  
    router.put("/:id", sekolah.update);
  
    router.delete("/:id", sekolah.delete);
  
    router.delete("/", sekolah.deleteAll);
  
    app.use("/api/sekolah", router);
  };