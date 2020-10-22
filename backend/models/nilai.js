module.exports = (sequelize, Sequelize) => {
    const nilai = sequelize.define("nilai", {
      nilaiDosen_uas: {
        type: Sequelize.INTEGER
      }, nilaiDosen_uts: {
        type: Sequelize.INTEGER
      }, nilaiGuru_uas: {
        type: Sequelize.INTEGER
      }, nilaiGuru_uts: {
        type: Sequelize.INTEGER
      }
    });
  
    return nilai;
  }