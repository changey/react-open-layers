var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FeatureSchema = new Schema({
  type: { type: String },
  x: { type: Number},
  y: { type: Number },
});

module.exports = mongoose.model('Feature', FeatureSchema);
