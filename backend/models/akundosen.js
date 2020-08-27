module.exports = (sequelize, Sequelize) => {
    const akundosen = sequelize.define("akundosen", {
      nama_dosen: {
        type: Sequelize.STRING
      }, nidn: {
        type: Sequelize.BIGINT
      }
    });
  
    akundosen.sync().then(() => {
      console.log('table akundosen created');
    });
  
    return akundosen;
  }