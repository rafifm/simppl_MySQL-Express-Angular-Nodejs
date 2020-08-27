module.exports = app => {
    const akundosen = require( "../controllers/dosen/akundosen");
    var router = require( "express").Router();
  
    router.post("/buat", akundosen.create);
  
    router.get("/", akundosen.findAll);
  
    router.get("/:id", akundosen.findOne);
  
    router.put("/:id", akundosen.update);
  
    router.delete("/:id", akundosen.delete);
  
    router.delete("/", akundosen.deleteAll);
  
    app.use("/api/akundosen", router);
  };