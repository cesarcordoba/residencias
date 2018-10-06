var db = require('../relations');
var imagenes = db.imagenes;


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    imagenes.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    imagenes.findById(id).then(function(imagenes) {
        imagenes.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    imagenes.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        imagenes.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        imagenes.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};

ex.obtenerImagenTrabajador = function(req, res, next) {

        var id = req.params.id;


        imagenes.findAll({
            where: {
                id_trabajador: id
            }
        })
        .then(result => res.status(200).jsonp(result))
};

