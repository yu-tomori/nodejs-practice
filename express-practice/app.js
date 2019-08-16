var express = require('express');
var ejs = require("ejs");
var bodyParser = require('body-parser'); // 1
var app = express();

app.engine('ejs', ejs.renderFile);
app.use(bodyParser.urlencoded({ // 2 bodyParserの初期化
	extended: true
}));

app.get('/', function(req, res) {
	console.log('---GET Request---');
	console.log('nameは' + req.query.age); // 3
	res.render('temp.ejs', {});
});

app.post('/', function(req, res) { // 4
	console.log('---POST Request---');
	console.log('nameは' + req.body.name); // 5
	console.log('ageは' + req.body.age);
	res.render('temp.ejs', {});
}); 

var server = app.listen(3000, function() {
	console.log('working server...');
});
