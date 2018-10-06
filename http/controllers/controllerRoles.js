var db = require('../relations');
var roles = db.roles;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    roles.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    roles.findById(id).then(function(roles) {
        roles.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    roles.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        roles.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        roles.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
