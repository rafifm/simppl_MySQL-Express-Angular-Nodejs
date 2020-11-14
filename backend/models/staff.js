module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define("staff", {
    nama_staff: {
      type: Sequelize.STRING
    }
  });

  return Staff;
}