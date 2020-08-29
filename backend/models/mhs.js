module.exports = (sequelize, Sequelize) => {
  const mhs = sequelize.define("mhs", {
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
    }
  });

  mhs.sync().then(() => {
    console.log('table mhs created');
  });

  return mhs;
}