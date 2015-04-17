'use strict';

var React = require('react');
var OLMap = require('./components/OLMap');
var OLFeature = require("./components/OLFeature");
var OLLayer = require("./components/OLLayer");

var Flux = require("./flux.js");
import AltContainer from 'alt/AltContainer';
// import FluxComponent from 'flummox/component';

var MapView = React.createClass({
	componentWillMount() {
		this.map = new OpenLayers.Map('map', {
			div: "map",
			projection: new OpenLayers.Projection("EPSG:900913"),
			displayProjection: new OpenLayers.Projection("EPSG:4326"),
			layers: [
			new OpenLayers.Layer.OSM()
			]
		});
		this.map.addLayer(new OpenLayers.Layer.OSM());

		this.flux = new Flux();
	},

	componentDidMount() {
		this.map.render(document.getElementById('map'))
	},

	render() {

		var size = 2;

		return (
			<div id="something">
				<AltContainer flux={this.flux}>
					<OLMap id="ol-map" zoom="4" map = {this.map}> </OLMap>
					<OLLayer class="ol-layer" map = {this.map}></OLLayer>
				</AltContainer>
			</div>
		)
	}
});

React.render(
	React.createElement(MapView, null),
	document.getElementById('flux-app')
);
