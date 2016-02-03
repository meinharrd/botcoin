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

var app = express();

app.get('/', function(req, res) {
	res.send('congrats');
});

app.listen(3000);