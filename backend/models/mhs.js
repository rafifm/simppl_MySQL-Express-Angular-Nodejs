module.exports = (sequelize, Sequelize) => {
  const mhs = sequelize.define("mahasiswa", {
    nama_mhs: {
      type: Sequelize.STRING
    }, nim_mhs: {
      type: Sequelize.BIGINT
    }, no_hp_mhs: {
      type: Sequelize.BIGINT
    }, ipk_mhs: {
      type: Sequelize.FLOAT
    }, nokwitansi_mhs : {
      type: Sequelize.BIGINT
    }, status_verifikasi : {
      type: Sequelize.INTEGER
    }
  });

  return mhs;
}