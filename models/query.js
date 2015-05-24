exports.create = function(attributes, callback) {
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

	connection.query('\
		--INSERT....\
		', 
	function(err, rows, fields) {
		if (err) {
			return callback(err);
		} else {
			return callback(null);
		}
	});

	connection.end();
}