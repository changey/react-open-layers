var React = require('react')
var OLFeatures = require('./OLFeatures')

var OLLayer = React.createClass({

  getInitialState: function() {
		return {
			selectedFeatureId: ""
		};
	},

  componentWillMount: function() {
    this.props.map.addLayer(new OpenLayers.Layer('base', {
			isBaseLayer: true,
			maxExtent: bounds
		}));

		var bounds = new OpenLayers.Bounds(-200, -200, 100, 100);

		this.vectorLayer = new OpenLayers.Layer.Vector("vector1", {
			maxExtent: bounds
		});
		this.props.map.addLayer(this.vectorLayer);


  },

  componentDidMount: function() {
    var drag = new OpenLayers.Control.DragFeature(this.vectorLayer, {
      autoActivate: true
    });
    this.props.map.addControl(drag);

    selectControl = new OpenLayers.Control.SelectFeature(
        [this.vectorLayer],
        {
            clickout: true, toggle: false,
            multiple: false, hover: false,
            toggleKey: "ctrlKey", // ctrl key removes from selection
            multipleKey: "shiftKey" // shift key adds to selection
        }
    );

    this.props.map.addControl(selectControl);
    selectControl.activate();
    console.log('added select control')

    var that = this;
    this.vectorLayer.events.on({
      "featureselected": function(e) {

        that.setState({selectedFeatureId: e.feature.id})
      }
    });
  },

  handleDelete() {
    this.vectorLayer.removeFeatures(this.vectorLayer.getFeatureById(this.state.selectedFeatureId));
    console.log("delete")
  },

  render: function() {
    return (
      <div>
        <OLFeatures map = {this.props.map}
          layer = {this.vectorLayer}>

        </OLFeatures>
        <button className="delete" onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
});

module.exports = OLLayer;
