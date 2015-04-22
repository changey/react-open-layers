var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FeatureSchema = new Schema({
  type: { type: String },
  master_id: { type: ObjectId},
  author_id: { type: ObjectId }
});

mongoose.model('Feature', FeatureSchema);
