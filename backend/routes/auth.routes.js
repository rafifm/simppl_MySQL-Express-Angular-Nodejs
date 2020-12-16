const { verifySignUp } = require("../middleware");
const authController = require("../controllers/auth.controller");
var router = require("express").Router();

module.exports = app => {
    
    router.post("/signup", [verifySignUp.cekDuplikasiEmail,verifySignUp.cekPeran], authController.signup);

    router.post("/signin", authController.signin);

    router.get("/admin", authController.ambilPengguna);

    router.delete("/:idPengguna", authController.hapus);

    app.use("/api/auth", router);


}
    