var config = require('./config.json');

// firebase
var Firebase = require('firebase');
var firebaseRef = new Firebase(config.firebase);


// api loop
var request = require('request');
request(config.dataApi+'orderbook', function(error, response, body) {
	firebaseRef.set(JSON.parse(body));
});


// webserver
var express = require('express');
var jade = require('jade');

var app = express();

app.use('/app', express.static(__dirname+'/dashboard/app'));

app.get('/', function(req, res) {
	res.send(jade.renderFile(__dirname+'/dashboard/main.jade'));
});

app.listen(3000);