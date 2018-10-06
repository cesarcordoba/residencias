var db = require('../relations');
var trabajadores = db.trabajadores;
var imagenes = db.imagenes;

var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    trabajadores.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    trabajadores.findById(id).then(function(trabajadores) {
        trabajadores.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;
    console.log("**************************")
    console.log(data)
    console.log("**************************")
    imagenes.create({
        imagen: data.imagen,
        id_trabajador: data.id
    }).then(result => res.status(200).jsonp(result))


    trabajadores.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};

//buscar
ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        trabajadores.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        trabajadores.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};
