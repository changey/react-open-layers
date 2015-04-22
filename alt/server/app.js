var express = require('express');
var app = express();
var FeatureAPI = require('./api/feature.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/addFeature', function (req, res) {
  FeatureAPI.addFeature(req, res);
});

var server = app.listen(9502, function () {

  //var host = server.address().address;
  var host = "127.0.0.1";
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
