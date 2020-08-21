module.exports = (sequelize, Sequelize) => {
  const mhs = sequelize.define("mhs", {
    nama_mhs: {
      type: Sequelize.STRING
    }, nim_mhs: {
      type: Sequelize.INTEGER
    }, ipk_mhs: {
      type: Sequelize.FLOAT
    }, nokwitansi_mhs : {
      type: Sequelize.INTEGER
    }
  });
  return mhs;
}