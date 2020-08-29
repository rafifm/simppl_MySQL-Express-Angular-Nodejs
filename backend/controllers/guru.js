 const db = require("../models/dbmysql");
 const guru = db.guru;
 const Op = db.Sequelize.Op;

 const getPagination = (page, size) => {
     const limit = size ? +size : 3;
     const offset = page ? page * limit : 0;

     return { limit, offset};
 }

 const getPagingData = (data, page, limit) => {
     const { count: totalGuru, rows: guru } = data;
     const halamanSekarang = page ? +page : 0;
     const totalHalaman = Math.ceil(totalGuru / limit);

     return { totalGuru, guru, totalHalaman, halamanSekarang };
 }

 exports.create = (req, res) => {
     if(!req.body.nama_guru){
         res.status(400).send({ 
             message:"input tidak boleh kosong lo"
            });
         return;
     }

     const metaGuru = {
         nama_guru: req.body.nama_guru,
         email_guru: req.body.email_guru,
         pass_guru: req.body.pass_guru
     }

     guru.create(metaGuru)
        .then(akunGuru => {
            res.send(akunGuru);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "ada error saat buat akun"
            });
        });
 };

 exports.findAll = (req, res) => {
     const { page, size, nama_guru } = req.query;
     var condition = nama_guru ? { nama_guru: { [Op.like]: `%${nama_guru}%`}} : null;
    
     const { limit, offset } = getPagination(page, size);

     guru.findAndCountAll({ where: condition, limit, offset})
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "error waktu pengambilan data guru"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    guru.findByPk(id)
        .then(staff => {
            res.send(staff);
        })
        .catch(err => {
            res.status(500).send({
                message: "error mengambil akun staff dengan id"
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    guru.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if(num == 1 ) {
                res.send({
                    message: "Akun guru sdh diupdate"
                });
            } else {
                res.send({
                    message: `tidak bisa update akun dengan id=${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "update error dengan id = " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    guru.destroy({
        where: { id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "akun guru sdh dihapus"
            });
        } else {
            res.send({
                message: `Gagal menghapus akun guru dengan id = ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send ({
            message: "gagal delete akun staff id = "+ id
        });
    });
};

exports.deleteAll = (req, res) => {
    guru.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({ message: `${num} akun guru sdh dihapus`})
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "error dalam proses penghapusan"
            });
        });
};