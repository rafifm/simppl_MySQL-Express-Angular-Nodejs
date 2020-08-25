module.exports = (sequelize, Sequelize) => {
  const mhs = sequelize.define("mhs", {
    nama_mhs: {
      type: Sequelize.STRING
    }, nim_mhs: {
      type: Sequelize.BIGINT
    }, ipk_mhs: {
      type: Sequelize.FLOAT
    }, nokwitansi_mhs : {
      type: Sequelize.BIGINT
    }
  });
  return mhs;
}