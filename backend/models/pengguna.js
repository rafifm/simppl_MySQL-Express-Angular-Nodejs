module.exports = (sequelize, Sequelize) => {
    const pengguna = sequelize.define("pengguna", {
       email_pengguna: {
        type: Sequelize.STRING
      }, password_pengguna: {
        type: Sequelize.STRING
      }
    });
  
    return pengguna;
  }