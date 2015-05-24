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

	// check
	connection.connect(function(err){
		if (err) {
			console.log(err.stack);
		}
	});

	// 1) check if another query exists
	// QueryData is table for our mysql db
	// email is primary key
	// should make index on our query
	connection.query('SELECT * FROM QueryData', // SQL FOR CHECKING MATCH, use new_query.email and new_query.query for query
		function(err, rows, fields) {
			if (err) {
				res.send(err);
			} else {
				if (rows.length == 0) { // no matches found
					connection.query('...insert to tab', // SQL FOR INSERTING, use new_query.email and new_query.query for query
						function(err, rows, fields) {
							if (err) {
								res.send(err); // error inserting
							} else {
								var response = {
									"match": 0,		// no matches
									"room_id": 0 	// don't matter
								};
								res.send(response);
							}
						}
					)
				} else { // matches found
					// 1) generate a random room_id
					var generated_room_id;

					// 2) email the matched user (rows.email or something like that) with the room_id

					// 3) send a response
					var response = {
						"match": 1,
						"room_id": generated_room_id
					}
					res.send(response)
				}
			}
		}
	);
});


module.exports = router;