'use strict';

require('es6-shim');
require('es6-shim/es6-sham');

var React = require('react');
var OLMap = require('./components/OLMap')
var OLFeature =require("./components/OLFeature")
var OLFeatures = require("./components/OLFeatures")
var OLLayer = require("./components/OLLayer")

var MapView = React.createClass({

	getInitialState() {
		return {
			features: []
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

		this.setState({map: map});
		this.map = map;

		// var size = 2;
		// for(var i =0; i< size; i++) {
		// 	features.add({position: i});
		// }
	},

	componentDidMount() {
		this.map.render(document.getElementById('map'))
	},

	componentWillUpdate() {
		console.log(this.map)
	},

	render() {

		var size = 2;

		return (
			<div id="something">
				<OLMap id="ol-map" zoom="4"
					map = {this.map}>

				</OLMap>
				<OLLayer class="ol-layer" map = {this.map}></OLLayer>
			</div>
		)
	}
});

React.render(
	React.createElement(MapView, null),
	document.getElementById('flux-app')
);
