var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

load('controllers').then('routes').into(app);

app.listen(3003, function() {
	console.log('Aplicação AngularJS em execução');
});