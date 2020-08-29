module.exports = (sequelize, Sequelize) => {
    const akundosen = sequelize.define("akundosen", {
      nama_dosen: {
        type: Sequelize.STRING
      }, nip: {
        type: Sequelize.BIGINT(20)
      }, no_hp_dosen: {
        type: Sequelize.STRING
      }, pangkat_dosen: {
        type: Sequelize.TEXT
      }
    });
  
    akundosen.sync().then(() => {
      console.log('table akundosen created');
    });
  
    return akundosen;
  }