var express = require('express');
var ejs = require("ejs");
var app = express();

app.engine('ejs', ejs.renderFile); // 1

app.get('/', function(req, res) {
	res.render('temp.ejs', { // 2
		contents: '<p>hoge</p>'
	});
});

var server = app.listen(3000, function() {
	console.log('working server...');
});
