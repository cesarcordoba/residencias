
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var departamento = require('./db/modeloDepartamento')(conector);
var horarios = require('./db/modeloHorarios')(conector);
var roles = require('./db/modeloRoles')(conector);
var imagenes = require('./db/modeloImagenes')(conector);
var trabajadores = require('./db/modeloTrabajadores')(conector);
var turnos = require('./db/modeloTurnos')(conector);
var asistentes = require('./db/modeloAsistentes')(conector);

//- Relations

trabajadores.belongsTo(departamento,{foreignKey:'id_departamento'});
departamento.hasOne(trabajadores,{foreignKey:'id_departamento'});

trabajadores.belongsTo(horarios,{foreignKey:'id_horario'});
horarios.hasOne(trabajadores,{foreignKey:'id_horario'});

trabajadores.belongsTo(turnos,{foreignKey:'id_turno'});
turnos.hasOne(trabajadores,{foreignKey:'id_turno'});

trabajadores.belongsTo(roles,{foreignKey:'id_rol'});
roles.hasOne(trabajadores,{foreignKey:'id_rol'});

imagenes.belongsTo(departamento,{foreignKey:'id_departamento'});
departamento.hasMany(imagenes,{foreignKey:'id_departamento'});

imagenes.belongsTo(trabajadores,{foreignKey:'id_trabajador'});
trabajadores.hasMany(imagenes,{foreignKey:'id_trabajador'});


module.exports.departamento = departamento;
module.exports.horarios = horarios;
module.exports.roles = roles;
module.exports.imagenes = imagenes;
module.exports.trabajadores = trabajadores;
module.exports.turnos = turnos;
module.exports.asistentes = asistentes;
