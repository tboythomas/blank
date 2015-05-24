var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('main');
});

router.get('/no_match', function(req, res) {
	res.render('no_match', {
		query: req.query.query
	});
});

router.get('/match', function(req, res) {
	res.render('match', {
		room_id: req.query.room_id,
		query: req.query.query
	});
});

module.exports = router;