var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Trabajadores = sequelize.define('trabajadores', {
    	id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        genero: Sequelize.STRING,
        nacionalidad: Sequelize.STRING,
        telefono: Sequelize.INTEGER,
        fecha_nacimiento: Sequelize.DATE,
        fecha_empleo: Sequelize.STRING,
        num_tarjeta: Sequelize.INTEGER,
        celular: Sequelize.INTEGER,
        direccion: Sequelize.STRING
        
    })

    return Trabajadores;

};

module.exports = ex;
