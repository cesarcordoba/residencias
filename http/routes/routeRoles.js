var express = require('express');
var routeRoles = express.Router();

var x = require("../controllers/controllerRoles");

routeRoles.route('/data/roles')
        .get(x.read)
        .post(x.create);

routeRoles.route('/data/roles/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeRoles;
