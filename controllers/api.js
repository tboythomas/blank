var express = require('express');
var router = express.Router({mergeParams: true});

var user = require('../models/query');

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
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'test',
		password : 'test123',
		database : 'blank',
		port : '3306'
	});

	connection.connect(function(err){
		if (err) {
			console.log(err.stack);
		}
	});

	// 1) check if another query exists
	connection.query('\
		--SELECT....\
		', 
	function(err, rows, fields) {
		if (err) {
			return callback(err);
		} else {
			return callback(null);

		}
	});
});