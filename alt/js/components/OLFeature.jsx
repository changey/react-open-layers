var React = require('react')

var OLFeature = React.createClass({

	componentWillMount: function() {
		var x = parseInt(this.props.x);
		var y = parseInt(this.props.y);

		this._olElement = new ol.Feature();
		this._olElement.setGeometry(new ol.geom.Point([x, y]));

		// if(this.props.id) {
		// 	this._olElement.geometry.id = this.props.id;
		// }
		// if(this.props.type) {
		// 	this._olElement.attributes.type = this.props.type;
		// }
	},

	componentDidMount() {
		let features = [];
		features.push(this._olElement);
		var vectorSource = new ol.source.Vector({
			features: features
		});

		this.props.layer.source = vectorSource;
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
