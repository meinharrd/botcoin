var express = require('express');
var jade = require('jade');

var app = express();

app.get('/', function(req, res) {
	res.send(jade.renderFile(__dirname+'/dashboard/main.jade'));
});

app.listen(3000);