var React = require('react');
var _ = require('underscore');

var Actions = require('../actions/Actions');
var OLLayerStore = require('../stores/OLLayerStore');
var OLFeature = require('./OLFeature');
var OLLayerBasic = require('./OLLayerBasic');
var OLDragControl = require('./OLDragControl');

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

  _handleDrag() {
    console.log("dragging complete");
  },

  render: function() {

    console.log("rendering")

    var map = this.props.map;
    var layer = this.vectorLayer;

    var featureDOMs = [];

    var allFeatures = this.state.allFeatures;

    for (var key in allFeatures) {
      //return <div>foo</div>
      featureDOMs.push (
        <OLFeature
          map = {map}
          position = {allFeatures[key].position}
          id = {allFeatures[key].id}
          x = {allFeatures[key].x}
          y = {allFeatures[key].y}
          layer = {layer} >
        </OLFeature>
      )
    }

    return (
      <div>
        <OLLayerBasic map={map}>
          <OLDragControl
            map={map}
            onComplete={this._handleDrag}
          />
          {featureDOMs}
        </OLLayerBasic>
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
