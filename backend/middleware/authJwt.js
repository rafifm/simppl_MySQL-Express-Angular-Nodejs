const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models/dbmysql");
const pengguna = db.pengguna;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message: "tidak ada token"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(401).send({
                message: "Tidak diautorisasi"
            });
        }
        req.penggunaId = decoded.id;
        next();
    });
};

isAdmin = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "admin") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan admin"
            });
            return;
        });
    });
};

isDosen = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "dosen") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan dosen"
            });
            return;
        });
    });
};

isGuru = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            console.log(peran);
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "guru") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan guru"
            });
            return;
        });
    });
};

isKaprodi = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "kaprodi") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan kaprodi"
            });
            return;
        });
    });
};

isStaff = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "staff") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan staff"
            });
            return;
        });
    });
};

isKoorSekolah = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "koorsekolah") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan koorsekolah"
            });
            return;
        });
    });
};

isMahasiswa = (req, res, next) => {
    pengguna.findByPk(req.penggunaId).then(pengguna => {
        pengguna.getPerans().then(peran =>{
            for(let i = 0; i < peran.length; i++) {
                if(peran[i].nama_peran === "mahasiswa") {
                    next();
                    return;
                }
            }
            res.status(403).send({
                message: "Anda bukan mahasiswa"
            });
            return;
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isDosen: isDosen,
    isGuru: isGuru,
    isKaprodi: isKaprodi,
    isStaff: isStaff,
    isKoorSekolah: isKoorSekolah,
    isMahasiswa: isMahasiswa
};

module.exports = authJwt;