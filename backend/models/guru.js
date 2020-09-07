module.exports = (sequelize, Sequelize) => {
    const guru = sequelize.define( "guru", {
        nama_guru: {
            type: Sequelize.STRING
        }, email_guru: {
            type: Sequelize.STRING
        }, pass_guru: {
            type: Sequelize.STRING
        }
    });
    return guru;
}