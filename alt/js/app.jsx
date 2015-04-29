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
		this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
          })
        ],

        view: new ol.View({
          center: ol.proj.transform([149.75, 42.683], 'EPSG:4326', 'EPSG:3857'),
          zoom: 1
        })
			});
		//this.map.addLayer(new ol.layer.OSM());

		this.flux = new Flux();
	},

	componentDidMount() {

		//this.map.render(document.getElementById('map'))
		this.map.setTarget('map')
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
