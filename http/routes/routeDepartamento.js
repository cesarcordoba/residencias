var express = require('express');
var routeDepartamento = express.Router();

var x = require("../controllers/controllerDepartamento");

routeDepartamento.route('/data/departamento')
        .get(x.read)
        .post(x.create);

routeDepartamento.route('/data/departamento/paginacion/:Items/:Pagina')
        .get(x.paginacion);
        	
routeDepartamento.route('/data/departamento/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeDepartamento;
