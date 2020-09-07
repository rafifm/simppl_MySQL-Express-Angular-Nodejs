module.exports = (sequelize, Sequelize) => {
    const sekolah = sequelize.define("sekolah", {
      nama_sekolah: {
        type: Sequelize.STRING
      }, kuotamhs: {
        type: Sequelize.INTEGER
      }
    });

    return sekolah;
  }