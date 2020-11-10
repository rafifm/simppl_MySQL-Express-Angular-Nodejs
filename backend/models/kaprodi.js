module.exports = (sequelize, Sequelize) => {
  const kaprodi = sequelize.define("kaprodi", {
    nama: {
      type: Sequelize.STRING
    }
  });
  return kaprodi;
}