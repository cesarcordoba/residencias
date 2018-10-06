var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Roles = sequelize.define('roles', {
      id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
      nombre: Sequelize.STRING
    })

    return Roles;

};

module.exports = ex;
