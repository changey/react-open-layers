/** @jsx React.DOM */
'use strict'
var React = require('react')
var OLFeature = require('./OLFeature')
var OLMap =require("./OLMap.jsx")

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
			  <OLMap zoom="4" />
      </div>
		)
  }
});

React.renderComponent(
    <div>
	    <MapView
        zoom="4"
			/>
    </div>,
    document.getElementById('content')
);
