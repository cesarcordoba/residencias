var express = require('express');
var routeTrabajadores = express.Router();

var x = require("../controllers/controllerTrabajadores");

routeTrabajadores.route('/data/trabajadores')
        .get(x.read)
        .post(x.create);

routeTrabajadores.route('/data/trabajadores/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeTrabajadores;
