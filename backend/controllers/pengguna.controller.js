exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.dosenBoard = (req, res) => {
    res.status(200).send("Dosen Content.");
};

exports.guruBoard = (req, res) => {
    res.status(200).send("Guru Content.");
};

exports.kaprodiBoard = (req, res) => {
    res.status(200).send("Kaprodi Content.");
};

exports.staffBoard = (req, res) => {
    res.status(200).send("Staff Content.");
};
  
exports.koorSekolahBoard = (req, res) => {
    res.status(200).send("Koordinator Sekolah Content.");
};

exports.mahasiswaBoard = (req, res) => {
    res.status(200).send("mahasiswa Content.");
};