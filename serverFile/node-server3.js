var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	var urlParts = url.parse(req.url);
	var path = __dirname + '/' + urlParts.pathname; // 1
	var stream = fs.createReadStream(path); // 2

	stream.on('data', function(data) {
		res.write(data); // 3
	});
	stream.on('end', function(data) {
		res.end(); // 4
	});
});

server.listen(3000);
console.log('working node server3...');
