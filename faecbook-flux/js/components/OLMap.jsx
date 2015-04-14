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
		// var map = new OpenLayers.Map("map", {
		// 	div: "map",
		// 	controls: []
		// });

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

		map.addLayer(new OpenLayers.Layer('base', {
			isBaseLayer: true,
			maxExtent: bounds
		}));

		var bounds = new OpenLayers.Bounds(-100, -100, 100, 100);

		// vector1 - the blue marker shape
		var vectorLayer1 = new OpenLayers.Layer.Vector("vector1", {
			maxExtent: bounds
		});
		map.addLayer(vectorLayer1);


		var f1 = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Point(-50, 50), {
				id: 'A'
			}, {
				externalGraphic: 'http://dev.openlayers.org/releases/OpenLayers-2.13/img/marker-blue.png',
				graphicWidth: 21,
				graphicHeight: 25
			});
			vectorLayer1.addFeatures(f1);

			var drag1 = new OpenLayers.Control.DragFeature(vectorLayer1, {
				autoActivate: true
			});
			map.addControl(drag1);

			map.zoomToMaxExtent();

			// var dragControl = new OpenLayers.Control.DragFeature(vectors);
			//
			// map.addControl(dragControl);
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
