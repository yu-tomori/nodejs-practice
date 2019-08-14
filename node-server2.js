var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var indexPage = fs.readFileSync('./post-get-index.html', 'utf-8');
var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		var urlParts = url.parse(req.url, true);
		console.log('--get request--');
		console.log('nameは' + urlParts.query.name);
		console.log('ageは' + urlParts.query.age);
	} else {
		var body = '';
		req.on('data', function(data) {
			body += data;
		});
		req.on('end', function() {
			var params = qs.parse(body);
			console.log('--post request--');
			console.log('nameは' + params.name);
			console.log('ageは' + params.age);
		});
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(indexPage);
	res.end();
});

server.listen(3000);
console.log('working server');
