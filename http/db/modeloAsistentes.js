var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Asistentes = sequelize.define('asistentes', {
    	id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        horaLlegada: Sequelize.STRING,
        horaSalida: Sequelize.STRING

    })

    return Asistentes;

};

module.exports = ex;
