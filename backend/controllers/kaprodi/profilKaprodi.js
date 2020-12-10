const db = require("../../models/dbmysql");
const kaprodi = db.kaprodi;
const pengguna = db.pengguna;

exports.tambahProfil = (req, res) =>{
  if(!req.body.nama_kaprodi){
    res.status(400).send({ message:"tidak boleh kosong"});
    return;
  }

  kaprodi.create({
    nama: req.body.nama_kaprodi
  }).then(kaprodi => {
    return pengguna.findOne({
      where: {id: req.params.idKaprodi}
    }).then(pengguna => {
      pengguna.setKaprodi(kaprodi.id);
    }).catch(err => {
      res.status(500).send({message: err.message || "error set akun kaprodi"});
    });
  }).catch(err => {
    res.status(500).send({message: err.message || "error penambahan profil"});
  })
}