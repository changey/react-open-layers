var mongoose = require("mongoose");
var Feature = require("../models/feature.js");
require("../config.js");

exports.getFeatures = function(req, res) {
  Feature.find({}).exec(function(err, features) {

    var output = [];
    if (err || !features || features.length === 0) {
      console.log("No Feature Found");
      res.send("No Feature Found");
    } else {

      outputJson = JSON.stringify(features, null, ' ');
      res.send(outputJson);
    };
  });
};

exports.addFeature = function(req, res) {
  var featureData = {
    "type": "Feature",
    "x": 1,
    "y": 2,
  };

  var featureModel = new Feature(featureData);
  featureModel.save(function(err) {
    if (err) {
      console.log('Error on save!')
    } else {
      res.send("success");
    }
  });
};
