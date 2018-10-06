var express = require('express');
var routeHorarios = express.Router();

var x = require("../controllers/controllerHorarios");

routeHorarios.route('/data/horarios')
        .get(x.read)
        .post(x.create);

routeHorarios.route('/data/horarios/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeHorarios;
