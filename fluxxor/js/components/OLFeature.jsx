var React = require('react')

var OLFeature = React.createClass({

	componentWillMount: function() {
		var x = parseInt(this.props.x);
		var y = parseInt(this.props.y);

		this._olElement = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Point(x, y)
		);

		if(this.props.id) {
			this._olElement.geometry.id = this.props.id;
		}
		if(this.props.type) {
			this._olElement.attributes.type = this.props.type;
		}
	},

	componentDidMount() {
		this.props.layer.addFeatures(this._olElement);
	},

	componentWillUnmount() {
		// this.props.layer.destroyFeatures(this._olElement);
		this._olElement.destroy();
	},

	render: function() {
		return null;
	}
});

module.exports = OLFeature;
