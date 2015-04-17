var React = require('react');
var _ = require('underscore');

var { Actions, LayerActions } = require('../actions/Actions');

var OLLayerStore = require('../stores/OLLayerStore');
var SelectedFeatureStore = require('../stores/SelectedFeatureStore');
var OLFeature = require('./OLFeature');
var OLLayerBasic = require('./OLLayerBasic');
var OLDragControl = require('./OLDragControl');

function getFeatureState() {
  return {
    allFeatures: OLLayerStore.getAll(),
    selectedFeatureId: SelectedFeatureStore.getSelectedFeature()
  }
}

var OLLayer = React.createClass({

  getInitialState: function() {
    return getFeatureState();
  },

  componentWillMount: function() {
    OLLayerStore.addChangeListener(this._onChange);
    SelectedFeatureStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    OLLayerStore.removeChangeListener(this._onChange);
    SelectedFeatureStore.removeChangeListener(this._onChange);
  },

  _onDestroyClick: function() {
    Actions.destroy(this.state.selectedFeatureId);
  },

  _onCreateClick: function() {
    Actions.create();
  },

  _handleDrag(e) {
    console.log("dragging complete", e);
  },

  _onFeatureSelected(id) {
    console.log("feature selected", id);
    LayerActions.selectFeature(id);
  },

  render: function() {

    console.log("rendering ollayer")

    const map = this.props.map;

    let featureDOMs = [];

    const allFeatures = this.state.allFeatures;


    for (let key in allFeatures) {
      featureDOMs.push (
        <OLFeature
          key = {"feature-" + key}
          position = {allFeatures[key].position}
          id = {allFeatures[key].id}
          type = "feature"
          x = {allFeatures[key].x}
          y = {allFeatures[key].y}
          />
      )
    }

    // <OLDragControl map={map} />
    return (
      <div>
        <OLLayerBasic map={map} onFeatureSelected={this._onFeatureSelected}>
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
