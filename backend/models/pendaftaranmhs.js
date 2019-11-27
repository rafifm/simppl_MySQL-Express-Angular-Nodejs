const mongoose = require ("mongoose");

const pendaftaranMhsSchema = mongoose.Schema({
  nama: { type: String, required: true },
  nim: { type: String, required: true},
  ipk: String,
  nokwitansi: String,
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model("PendaftaranMhs", pendaftaranMhsSchema);