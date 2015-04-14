/** @jsx React.DOM */
'use strict'
var React = require('react')

var OLMap = React.createClass({

  componentDidMount: function() {
    //this.map.setTarget(document.getElementById('olMap'));
		// this.map.renderSync();

		// var wkt = new OpenLayers.Format.WKT();
		//
		// var vectors = new OpenLayers.Layer.Vector('My Vectors');
		// map.addLayer(vectors);
		//
		// var polygonFeature = wkt.read("POLYGON((-15 2, -15 -10, 7 -10, 7 2, -15 2))");
		// polygonFeature.geometry.transform(map.displayProjection, map.getProjectionObject());
		// vectors.addFeatures([polygonFeature]);
		//
		// map.zoomToExtent(vectors.getDataExtent());
		//console.log(this.props)

		this.props.map.setCenter((new OpenLayers.LonLat(14975000,4268330)), parseInt(this.props.zoom));

			// var dragControl = new OpenLayers.Control.DragFeature(vectors);
			//
			// map.addControl(dragControl);
  },

  render: function() {
		return (
			<div id="map">
			  bar
      </div>
		)
  }
});

module.exports = OLMap;
