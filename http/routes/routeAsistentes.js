var express = require('express');
var routeAsistentes = express.Router();

var x = require("../controllers/controllerAsistentes");

routeAsistentes.route('/data/asistentes')
        .get(x.read)
        .post(x.create);

routeAsistentes.route('/data/asistentes/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeAsistentes;
