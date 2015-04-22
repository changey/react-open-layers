var mongoose = require("mongoose");
var properties = require("../properties.json");

var uristring;
var DB_USER = "";
var DB_PASSWORD = "";

// if (properties.env === "prod") {
//
//   process.env.MONGOLAB_URI = "mongodb://"
//       + DB_USER
//       + ":"
//       + DB_PASSWORD
//       + properties.mongolabUri;
//
//   uristring =
//     process.env.MONGOLAB_URI ||
//       process.env.MONGOHQ_URL
// } else {
//
//   uristring = 'mongodb://localhost:27017/react_openlayers_dev';
// }

uristring = 'mongodb://localhost:27017/react_openlayers_dev';

mongoose.connect(uristring, function(err, res) {
  if(err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err);
  }
  else {
    console.log('Succeeded connected to: ' + uristring);
  }
});

// In case the browser connects before the database is connected, the
// user will see this message.
var found = ['DB Connection not yet established.  Try again later.  Check the console output for error messages if this persists.'];
