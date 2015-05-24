var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('main');
});

router.get('/no_match', function(req, res) {
	res.render('no_match');
});

router.get('/match', function(req, res) {
	res.render('match');
});

module.exports = router;