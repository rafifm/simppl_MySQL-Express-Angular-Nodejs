const mongoose = require ("mongoose");

const schemaDosen = mongoose.Schema({
  id: String,
  nama: String,
  nip: String,
  jabatan: String,
  pangkat: String,
  golongan: String,
  npwp: String,
  imagePath: String
});

module.exports = mongoose.model("datadosen", schemaDosen);