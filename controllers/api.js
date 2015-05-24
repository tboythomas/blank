var express = require('express');
var router = express.Router({mergeParams: true});

// middleware function
router.use(function(req, res, next) {
	console.log('api request logged');
	next();
});

// tests the api
router.get('/test', function(req, res) {
	res.send('api is working');
});

router.post('/query', function(req, res) {
	var new_query = {
		email: req.body.email,
		query: req.body.query
	};
	// db setup
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : '198.199.118.67',
		user     : 'root',
		password : '',
		database : 'blank',
		port : '3306'
	});

	connection.connect(function(err){
		if (err) {
			console.log(err.stack);
		}
	});

	// 1) check if another query exists
	connection.query('SELECT * FROM QueryData', 
		function(err, rows, fields) {
			if (err) {
				res.send(err);
			} else {
				res.send(rows);
			}
		}
	);
});

module.exports = router;