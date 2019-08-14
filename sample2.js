var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.readFile('./temp.html', 'utf-8', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(3000);
console.log('working server2');
