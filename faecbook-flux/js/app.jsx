'use strict';

require('es6-shim');
require('es6-shim/es6-sham');

var React = require('react');
var OLFeature = require('./components/OLFeature')
var OLMap =require("./components/OLMap")

var MapView = React.createClass({

	getInitialState() {
    return {
        showDialog: true
    };
  },

	componentWillMount() {
    // this.map = new OpenLayers.Map('map', {
		// 	div: "map"
		// });
		var map = new OpenLayers.Map('map', {
			div: "map",
			projection: new OpenLayers.Projection("EPSG:900913"),
			displayProjection: new OpenLayers.Projection("EPSG:4326"),
			layers: [
			new OpenLayers.Layer.OSM()
			]
		});
		map.addLayer(new OpenLayers.Layer.OSM());
		map.setCenter(new OpenLayers.LonLat(0, 0), 2);

		this.setState({map: map});
    this.map = map;
	},

  componentDidMount() {
    this.map.render(document.getElementById('map'))
	},

	componentWillUpdate() {
		console.log(this.map)
	},

  render() {
		return (
			<div id="something">
			  <OLMap id="ol-map" zoom="4"
					map = {this.map}>

        </OLMap>
				<OLFeature>
					bar
				</OLFeature>
      </div>
		)
  }
});

React.render(
    React.createElement(MapView, null),
    document.getElementById('flux-app')
);
