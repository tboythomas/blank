// intializing objects
var express = require('express');
var app = express();				
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// views routes
var routes = require('./routes/index');
app.use('/', routes);

// api routes
var api = require('./controllers/api');
app.use('/api', api);

// begin server
server.listen(80, function() {
	console.log('listening on *:80');
});
