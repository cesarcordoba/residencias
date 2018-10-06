var db = require('../relations');
var departamento = db.departamento;
var _ = require('lodash')


var ex = module.exports = {};

//crear
ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    departamento.create(data).then(result => res.status(200).jsonp(result))

};

//eliminar
ex.delete = function(req, res, next) {

    var id = req.params.id;

    departamento.findById(id).then(function(departamento) {
        departamento.destroy().then(result => res.status(200).jsonp(result))
    });

};

//actualizar
ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    departamento.update(data, {
        where: {
            id: id
        }
    }).then(result => res.status(200).jsonp(result))
};


ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        departamento.findById(id)
        .then(result => res.status(200).jsonp(result))
    } else {
        departamento.findAll()
        .then(result => res.status(200).jsonp(result))
    }
};

ex.paginacion = function(req, res, next) {

    var items = req.params.Items;
    var pagina = req.params.Pagina;

    departamento.findAndCountAll({
        order:['nombre']}).then(result=> {
            const response = new Object({pagina:Math.round(result.count/items),
                        items: _.chunk(result.rows, items)[pagina-1]});
            res.status(200).jsonp(response);
        })

};