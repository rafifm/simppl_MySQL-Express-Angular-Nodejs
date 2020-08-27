module.exports = (sequelize, Sequelize) => {
  const Staff = sequelize.define("staff", {
    nama_staff: {
      type: Sequelize.STRING
    }, email_staff: {
      type: Sequelize.STRING
    }, pass_staff: {
      type: Sequelize.STRING
    }
  });

  Staff.sync().then(() => {
    console.log('table staff created');
  });

  return Staff;
}