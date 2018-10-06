var db = require('../relations');
var horarios = db.horarios;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    horarios.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    horarios.findById(id).then(function(horarios) {
        horarios.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    horarios.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        horarios.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        horarios.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
