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
		console.log(this.props)

		// map.addLayer(new OpenLayers.Layer('base', {
		// 	isBaseLayer: true,
		// 	maxExtent: bounds
		// }));
		//
		// var bounds = new OpenLayers.Bounds(-100, -100, 100, 100);
		//
		// // vector1 - the blue marker shape
		// var vectorLayer1 = new OpenLayers.Layer.Vector("vector1", {
		// 	maxExtent: bounds
		// });
		// map.addLayer(vectorLayer1);
		//
		//
		// var f1 = new OpenLayers.Feature.Vector(
		// 	new OpenLayers.Geometry.Point(-50, 50), {
		// 		id: 'A'
		// 	}, {
		// 		externalGraphic: '../images/pikachu.png',
		// 		graphicWidth: 40,
		// 		graphicHeight: 40
		// 	});
		// 	vectorLayer1.addFeatures(f1);
		//
		// 	var drag1 = new OpenLayers.Control.DragFeature(vectorLayer1, {
		// 		autoActivate: true
		// 	});
		// 	map.addControl(drag1);
		//
		// 	map.zoomToMaxExtent();

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
