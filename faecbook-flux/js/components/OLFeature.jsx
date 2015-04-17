var React = require('react')

var OLFeature = React.createClass({

	componentWillMount: function() {
		console.log("will mount")

	},

	componentDidMount: function() {

		var lonlat = new OpenLayers.LonLat(14975000,4268330);

		var position = parseInt(this.props.position);
		var x = parseInt(this.props.x);
		var y = parseInt(this.props.y);
		//var position = 1;

		var feature = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Point(x, y), {

			}, {
				externalGraphic: '../images/pikachu.png',
				graphicWidth: 40,
				graphicHeight: 40
		});

		feature.geometry.id = this.props.id

		this.props.layer.addFeatures(feature);

			//      this.props.map.zoomToMaxExtent();


		},

		render: function() {
			return (
				<div className="feature">
				</div>
			)
		}
	});

	module.exports = OLFeature;
