var React = require('react');
var Actions = require('../actions/Actions');
var OLLayerStore = require('../stores/OLLayerStore');
var OLFeature = require('../components/OLFeature');
var div = React.DOM.div;
var _ = require('underscore');

function getFeatureState() {
  return {
    allFeatures: OLLayerStore.getAll(),
    selectedFeatureId: ""
  }
}

var OLLayer = React.createClass({

  getInitialState: function() {
    return getFeatureState();
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

    var features = [];
    var size = 2;

    for(var i = 0; i < size; i++) {
      features.push({
        position: i,
        id: i
      })
    }

    this.setState({features: features});

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

    var that = this;
    this.vectorLayer.events.on({
      "featureselected": function(e) {
        that.setState({selectedFeatureId: e.feature.geometry.id})
      }
    });

    OLLayerStore.addChangeListener(this._onChange);

  },

  componentWillUnmount: function() {
    OLLayerStore.removeChangeListener(this._onChange);
  },

  _onDestroyClick: function() {

    var that = this;

    _.each(this.vectorLayer.features, function(feature) {

      if(feature) {
        if (feature.geometry.id === that.state.selectedFeatureId) {
          that.vectorLayer.removeFeatures(feature);
        }
      }
    });

    Actions.destroy(this.state.selectedFeatureId);
  },

  _onCreateClick: function() {
    Actions.create();
  },

  render: function() {

    var map = this.props.map;
    var layer = this.vectorLayer;

    var featureDOMs = [];

    var allFeatures = this.state.allFeatures;

    for (var key in allFeatures) {
      //return <div>foo</div>
      featureDOMs.push (
        <OLFeature map = {map}
          position = {allFeatures[key].position}
          id = {allFeatures[key].id}
          x = {allFeatures[key].x}
          y = {allFeatures[key].y}
          layer = {layer}>
        </OLFeature>
      )
    }

    return (
      <div>
        <div className="features">
          {featureDOMs}
        </div>
        <button className="delete" onClick={this._onDestroyClick}>Delete</button>
        <button className="create" onClick={this._onCreateClick}>Add a fetaure</button>
      </div>
    )
  },

  /**
  * Event handler for 'change' events coming from the Store
  */
  _onChange: function() {

    this.setState(getFeatureState());
  }
});

module.exports = OLLayer;
