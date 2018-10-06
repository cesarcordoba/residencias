var db = require('../relations');
var turnos = db.turnos;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    turnos.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    turnos.findById(id).then(function(turnos) {
        turnos.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    turnos.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        turnos.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        turnos.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
