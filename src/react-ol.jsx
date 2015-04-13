var React = require('react')

var OLMap = React.createClass({

	getInitialState: function() {
		return {
			showDialog: true
		};
	},

	componentWillMount: function() {
		console.log("will mount")
		var polyFeature = new ol.Feature({
				geometry: new ol.geom.Polygon([
						[
								[10, -25],
								[35, -25],
								[35, -35],
								[10, -35],
								[10, -25]
						]
				])
		});
		polyFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

		//Holds the Point feature
		var pointFeature = new ol.Feature({
				geometry: new ol.geom.Point(
				[28.048095703125, -26.015625])
		});
		pointFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');

		var vectorLayer = new ol.layer.Vector({
				source: new ol.source.Vector({
						features: [
						polyFeature,
						pointFeature]
				})
		});

		var imageLayer = new ol.layer.Image({
				source: new ol.source.ImageVector({
						source: new ol.source.Vector({
								features: [
								polyFeature,
								pointFeature]
						})
				})
		});


		this.map = new ol.Map({
			layers: [
			new ol.layer.Tile({
				source: new ol.source.TileJSON({
					url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
				})
			}),
			vectorLayer //When the vector layer is used both the features displays correctly.
			//imageLayer //When the image layer is in use only the point feature is displayed.
			],
			view: new ol.View({
				center: [2952104.019976033, -3277504.823700756],
				zoom: parseInt(this.props.zoom)
			})
		});
	},

	componentDidMount: function() {
		this.map.setTarget(document.getElementById('olMap'));
		// this.map.renderSync();
	},

	create_map: function() {
		console.log("bar");
	},

	render: function() {
		return (
			<div id="olMap">
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
