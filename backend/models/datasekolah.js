module.exports = (sequelize, Sequelize) => {
    const sekolah = sequelize.define("sekolah", {
      nama_sekolah: {
        type: Sequelize.STRING
      }, kuotamhs: {
        type: Sequelize.INTEGER
      }
    });

    sekolah.sync().then(() => {
      console.log('table sekolah created');
    });

    return sekolah;
  }