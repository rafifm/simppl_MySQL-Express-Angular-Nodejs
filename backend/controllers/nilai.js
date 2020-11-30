const db= require("../models/dbmysql");
const dbNilai = db.nilai;
const Op = db.Sequelize.Op;

exports.tambahNilaiUasDosen = (req,res) => {
    if(!req.body.nilaiDosen_uas) {
        res.status(400).send({
            message:"input kosong"
        });
        return;
    }
    console.log(req.body);

    dbNilai.create({ nilaiDosen_uas: req.body.nilaiDosen_uas})
        .then(nilaiUas => {
            res.send(nilaiUas);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error penilaian uas"
            });
        });
};

exports.tambahNilaiUtsDosen = (req, res) => {
    if(!req.body.nilaiDosen_uts) {
        res.status(400).send({
            message: "input kosong"
        });
        return;
    }

    dbNilai.create({ nilaiDosen_uts: req.body.nilaiDosen_uts})
        .then(nilaiUts =>{
            res.send(nilaiUts);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error penilaian uts"
            });
        });
}

exports.tambahNilaiUasGuru = (req, res) => {
    if(!req.body.nilaiGuru_uas) {
        res.status(400).send({
            message: "input kosong"
        });
        return;
    }

    dbNilai.create({ nilaiGuru_uas: req.body.nilaiGuru_uas})
        .then(nilaiUas =>{
            res.send(nilaiUas);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error penilaian Uas"
            });
        });
}

exports.tambahNilaiUtsGuru = (req, res) => {
    if(!req.body.nilaiGuru_uts) {
        res.status(400).send({
            message: "input kosong"
        });
        return;
    }

    dbNilai.create({ nilaiGuru_uts: req.body.nilaiGuru_uts})
        .then(nilaiUts =>{
            res.send(nilaiUts);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "error penilaian Uts"
            });
        });
}

exports.ambilNilai = (req, res) => {
    const nilai_uas = req.query;
    var condition = nilai_uas? { nilai_uas: {[Op.like]: `%${nilai_uas}`}} : null;
    
    dbNilai.findAll ({ where: condition})
        .then(nilai => {
            res.send(nilai);
        }).catch(err => {
            res.status(500).send({
                message: err.message || " error pengambilan nilai"
            });
        });
}

