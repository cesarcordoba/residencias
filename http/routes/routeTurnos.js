var express = require('express');
var routeTurnos = express.Router();

var x = require("../controllers/controllerTurnos");

routeTurnos.route('/data/turnos')
        .get(x.read)
        .post(x.create);

routeTurnos.route('/data/turnos/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeTurnos;
