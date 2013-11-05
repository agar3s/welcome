var connect = require('connect');
var http = require('http');
var path = require('path');

var app = connect();
var server = http.createServer(app);


app.use(connect.static(path.resolve()));
app.use(connect.logger('dev'));

server.listen(3000);
