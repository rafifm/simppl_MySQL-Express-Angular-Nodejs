module.exports = app => {
    const nilai = require( "../controllers/nilai");
    var router = require("express").Router();

    router.post("/dosen/tambahnilaiuas", nilai.tambahNilaiUasDosen);

    router.post("/dosen/tambahnilaiuts", nilai.tambahNilaiUtsDosen);

    router.post("/guru/tambahnilaiuas", nilai.tambahNilaiUasGuru);

    router.post("/guru/tambahnilaiuts", nilai.tambahNilaiUtsGuru);

    router.get("/", nilai.ambilNilai);

    app.use("/api/nilai", router);
}