const { verifySignUp } = require("../middleware");
const authController = require("../controllers/auth.controller");
var router = require("express").Router();

module.exports = app => {
    // app.use((req, res, next) => {
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token, Origin, Content-Type, Accept"
    //     );
    //     next();
    // });
    
    router.post("/signup", [verifySignUp.cekDuplikasiEmail,verifySignUp.cekPeran], authController.signup);

    router.post("/signin", authController.signin);

    router.get("/admin", authController.ambilPengguna);

    app.use("/api/auth", router);


}
    