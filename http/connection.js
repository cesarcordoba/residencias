var mysql = require('mysql');
var Sequelize = require('sequelize');

// var sequelize = new Sequelize('residencias', 'root', '1234', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: '3306',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });

var sequelize = new Sequelize('heroku_e502757dbc29f89', 'b18e5864647001', 'e95e62f0', {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// sequelize.sync()
//     .then(function() {
//         console.log('Connecion realizada');
//     })
//     .catch(function(err) {
//         console.log('No se puede conectar a la bd:', err);
//     }
// );


module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
