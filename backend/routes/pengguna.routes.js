const { authJwt } = require("../middleware");
const penggunaController = require("../controllers/pengguna.controller");
var router = require("express").Router();

module.exports = app => {
    
    router.get("/all", penggunaController.allAccess);

    router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], penggunaController.adminBoard);

    router.get("/dosen", [authJwt.verifyToken, authJwt.isDosen], penggunaController.dosenBoard);

    router.get("/guru", [authJwt.verifyToken, authJwt.isGuru], penggunaController.guruBoard);

    router.get("/kaprodi", [authJwt.verifyToken, authJwt.isKaprodi], penggunaController.kaprodiBoard);

    router.get("/staff", [authJwt.verifyToken, authJwt.isStaff], penggunaController.staffBoard);

    router.get("/koorSekolah", [authJwt.verifyToken, authJwt.isKoorSekolah], penggunaController.koorSekolahBoard);

    router.get("/mahasiswa", [authJwt.verifyToken, authJwt.isMahasiswa], penggunaController.mahasiswaBoard);

    app.use("/api/test", router);

}