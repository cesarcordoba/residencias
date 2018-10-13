var db = require('../relations');
var asistentes = db.asistentes;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    asistentes.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    asistentes.findById(id).then(function(asistentes) {
        asistentes.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    asistentes.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        asistentes.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        asistentes.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
