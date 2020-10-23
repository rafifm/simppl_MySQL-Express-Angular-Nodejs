module.exports = (sequelize, Sequelize) => {
    const peran = sequelize.define("peran", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      }, nama_peran: {
        type: Sequelize.STRING
      }
    });
  
    return peran;
  }