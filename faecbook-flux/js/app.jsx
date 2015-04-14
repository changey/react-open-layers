'use strict';

require('es6-shim');
require('es6-shim/es6-sham');

var React = require('react');
var App = require('./components/App.jsx');
var OLFeature = require('./components/OLFeature')
var OLMap =require("./components/OLMap")

var MapView = React.createClass({

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

	create_map: function() {
    console.log("bar");
	},

  render: function() {
		return (
			<div id="something">
			  <OLMap zoom="4">
          <OLFeature>
            bar
          </OLFeature>
        </OLMap>
      </div>
		)
  }
});

React.render(
    React.createElement(MapView, null),
    document.getElementById('flux-app')
);
