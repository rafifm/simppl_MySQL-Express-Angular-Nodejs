const db = require("../models/dbmysql");
const config = require("../config/auth.config");
const pengguna = db.pengguna;
const peran = db.peran;
const dosen = db.akundosen;
const mhs = db.mhs;
const kaprodi = db.kaprodi;
const staff = db.staff;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    pengguna.create({
        email_pengguna: req.body.email_pengguna,
        password_pengguna: bcrypt.hashSync(req.body.password_pengguna, 8)
    }).then(pengguna => {
        if(req.body.peran){
            peran.findAll({
                where: {
                    nama_peran: req.body.peran
                }
            }).then( peran =>{
                pengguna.setPerans(peran).then(() => {
                    res.send({ message: "registrasi berhasil"});
                }).catch(err =>{
                    res.status(500).send({ message: ' set peran gagal' + err.message});
                });
            }).catch(err =>{
                res.status(500).send({ message: 'cari peran ' + err.message});
            });
        } else {
            pengguna.setPerans([1]).then(()=>{
                res.send({message: "registrasi admin berhasil"});
            });
        }
    }).catch(err =>{
        res.status(500).send({ message: 'tambah pengguna ' + err.message});
    });
}

exports.signin = (req, res) => {
    pengguna.findOne({
        where: {
            email_pengguna: req.body.email_pengguna, 
        },
        include: [{
            model: dosen,
            required: false,
            status: 'active'
        },{
            model: mhs,
            required: false,
            status: 'active'
        },{
            model: kaprodi,
            required: false,
            status: 'active'
        },{
            model: staff,
            required: false,
            status: 'active'
        }]
    }).then(pengguna => {
        if(!pengguna) {
            return res.status(404).send({ message: "akun tidak ditemukan"});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password_pengguna,
            pengguna.password_pengguna
        );

        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password"
            });
        }

        var token = jwt.sign({ id: pengguna.id},config.secret, {
            expiresIn: 86400
        });

        var idPengguna;
        var nama;
        if(pengguna.akundosen ){
            idPengguna = pengguna.akundosen.id;
            nama = pengguna.akundosen.nama_dosen;
        } else if(pengguna.mahasiswa) {
            idPengguna = pengguna.mahasiswa.id;
            nama = pengguna.mahasiswa.nama_mhs;
        } else if (pengguna.kaprodi) {
            idPengguna = pengguna.kaprodi.id;
            nama = pengguna.kaprodi.nama;
        } else if (pengguna.staff) {
            idPengguna = pengguna.staff.id;
            nama = pengguna.staff.nama_staff;
        } else {
            idPengguna = 'kosong';
            nama = 'belum ada';
        }
        var authorities = [];
        pengguna.getPerans().then(peran => {
            for(let i = 0; i < peran.length; i++) {
                authorities.push("PERAN_" + peran[i].nama_peran.toUpperCase());
            }
            res.status(200).send({
                id: pengguna.id,
                email_pengguna: pengguna.email_pengguna,
                peran: authorities,
                accessToken: token,
                idPengguna: idPengguna,
                nama: nama
            });
        }).catch(err => {
            res.status(500).send({ message: err.message});
        });
    }).catch(err => {
        res.status(500).send({ message: err.message});
    });
};

exports.ambilPengguna = (req, res) => {
    return pengguna.findAll({
        include: [{
            model: peran,
            through: "pengguna_peran"
        }]
    }).then(semuaPengguna => {
        res.status(200).send(semuaPengguna);
    }).catch(err => {
        res.status(500).send({message: 'ambil semua pengguna error'+ err.message});
    });
}