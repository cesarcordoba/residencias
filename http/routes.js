var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var secret  = 'ScarlettJohanson';

router.get("/", function(req, res) {
    res.render("main/layout");
})

router.get("/main/:url", function(req, res) {
    var page = req.params.url
    res.render("main/frags/" + page);
})

router.get("/admin/:url", function(req, res) {
    var page = req.params.url
    res.render("admin/frags/" + page);
})

router.get("/admin", function(req, res) {
    res.render("admin/layout");
})

router.all('/:action', function(req, res){
})

router.get("/partials/:part", function(req, res) {
	var partial = req.params.part
    res.render("partials/" + partial );
    let error_message = req.flash('error')[0];
    res.locals.error_message = error_message;
})

router.get("/dialogs/:part", function(req, res) {
    var partial = req.params.part
    res.render("dialogs/" + partial );
})



module.exports = router;
