const { authJwt } = require("../middleware")
const akundosen = require( "../controllers/dosen/akundosen");
var router = require( "express").Router();


module.exports = app => {
  
    router.post("/buat", akundosen.create);
  
    router.get("/", akundosen.findAll);

    router.get("/staff", akundosen.ambilDosen);

    router.get("/penempatan", akundosen.ambilDosenMhs);
  
    router.get("/:id", akundosen.findOne);

    router.get("/penilaian/:idPengguna", akundosen.ambilDosenNilai);

    router.get("/:idDsn/:idMhs", akundosen.insertMhs);
  
    router.put("/:id", akundosen.update);

    router.put("/profil/:idPengguna", akundosen.tambahDosen)
  
    router.delete("/:id", akundosen.delete);
  
    router.delete("/", akundosen.deleteAll);
  
    app.use("/api/akundosen", router);
  };