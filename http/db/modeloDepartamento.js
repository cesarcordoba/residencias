var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Departamento = sequelize.define('departamento', {
    	id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        codigo_depto: Sequelize.STRING
    })

    return Departamento;

};

module.exports = ex;
