var React = require('react')

var OLFeature = React.createClass({

	componentWillMount: function() {
		console.log("will mount")

	},

	componentDidMount: function() {

		var lonlat = new OpenLayers.LonLat(14975000,4268330);

		var position = parseInt(this.props.position);
		//var position = 1;

		var f1 = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Point(14975000,4268330 + position * 400000), {
				id: this.props.id
			}, {
				externalGraphic: '../images/pikachu.png',
				graphicWidth: 40,
				graphicHeight: 40
			});
			this.props.layer.addFeatures(f1);



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
