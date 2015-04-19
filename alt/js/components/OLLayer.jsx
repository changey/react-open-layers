var React = require('react');
var _ = require('underscore');

// var connectToStores = require('flummox/lib/addons/connectToStores');

var OLFeature = require('./OLFeature');
var OLLayerBasic = require('./OLLayerBasic');
var OLDragControl = require('./OLDragControl');

var OLLayer = React.createClass({
  getInitialState() {
    return this._getStateFromStores()
  },

  _getStateFromStores() {
    return {
        features: this.props.flux.getStore('features').getState().features,
        selectedFeatureId: this.props.flux.getStore('selectedFeature').getState().selectedFeatureId
    }
  },

  componentWillMount() {
    this.props.flux.getStore('features').listen(this.onChange)
    this.props.flux.getStore('selectedFeature').listen(this.onChange)
  },

  onChange() {
    this.setState(this._getStateFromStores());
  },

  _onDestroyClick: function() {
    this.props.flux.getActions('layer').removeFeature(this.state.selectedFeatureId);
  },

  _onCreateClick: function() {
    this.props.flux.getActions('layer').createFeature();
  },

  _onFeatureSelected(id) {
    this.props.flux.getActions('layer').selectFeature(id);
  },

  _handleDrag(e) {
    console.log("dragging complete", e);
  },

  render: function() {
    const map = this.props.map;

    let featureDOMs = [];

    const allFeatures = this.state.features;
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

    console.log("render")
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
  }
});

// OLLayer = connectToStores(OLLayer, {
//   'features': store => ({
//     features: store.getFeatures()
//   }),
//   'selectedFeature': store => ({
//     selectedFeatureId: store.getSelectedFeatureId()
//   })
// });

module.exports = OLLayer;
