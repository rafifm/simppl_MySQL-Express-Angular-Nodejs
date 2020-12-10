module.exports = (sequelize, Sequelize) => {
    const akundosen = sequelize.define("akundosen", {
      nama_dosen: {
        type: Sequelize.STRING
      }, nip: {
        type: Sequelize.STRING
      }, no_hp_dosen: {
        type: Sequelize.STRING
      }, pangkat_dosen: {
        type: Sequelize.TEXT
      }
    });
  
    return akundosen;
  }