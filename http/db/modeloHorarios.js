var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Horarios = sequelize.define('horarios', {
    	id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        horario: Sequelize.STRING
    })

    return Horarios;

};

module.exports = ex;
