var React = require('react')

var OLMap = React.createClass({

	getInitialState: function() {
		return {
			showDialog: true
		};
	},

	componentWillMount: function() {
		console.log("will mount")

	},

	componentDidMount: function() {
		//this.map.setTarget(document.getElementById('olMap'));
		// this.map.renderSync();

		map = new OpenLayers.Map('map', {
			div: "map",
			projection: new OpenLayers.Projection("EPSG:900913"),
			displayProjection: new OpenLayers.Projection("EPSG:4326"),
			layers: [
			new OpenLayers.Layer.OSM()
			]
		});
		map.addLayer(new OpenLayers.Layer.OSM());
		map.setCenter(new OpenLayers.LonLat(0, 0), 2);

		var wkt = new OpenLayers.Format.WKT();

		var vectors = new OpenLayers.Layer.Vector('My Vectors');
        map.addLayer(vectors);

		var polygonFeature = wkt.read("POLYGON((-15 2, -15 -10, 7 -10, 7 2, -15 2))");
		polygonFeature.geometry.transform(map.displayProjection, map.getProjectionObject());
		vectors.addFeatures([polygonFeature]);

		map.zoomToExtent(vectors.getDataExtent());
	},

	create_map: function() {
		console.log("bar");
	},

	render: function() {
		return (
			<div id="map">
				foo
			</div>
		)
	}
});

module.exports = OLMap;
// React.renderComponent(
// 	    <OLMap
//         zoom="4"
// 				// cancelButtonText="Cancel"
// 				// okAction={this.okAction}
// 			/>,
// 			document.getElementById('react')
// );
