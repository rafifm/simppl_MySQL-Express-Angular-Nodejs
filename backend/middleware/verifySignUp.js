const db = require("../models/dbmysql");
const PERAN = db.PERAN;
const pengguna = db.pengguna;

cekDuplikasiEmail = (req, res, next) => {
    pengguna.findOne({
        where: {
            email_pengguna: req.body.email_pengguna
        }
    }).then(pengguna => {
        if(pengguna){
            res.status(400).send({
                message:"email sdh ada"
            });
            return;
        }
        next();
    });
}

cekPeran = (req, res, next) => {
    if(req.body.peran){
        for(let i=0; i < req.body.peran.lengt; i++){
            if(!PERAN.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "peran tidak ditemukan = " + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    cekDuplikasiEmail: cekDuplikasiEmail,
    cekPeran: cekPeran
}

module.exports = verifySignUp;