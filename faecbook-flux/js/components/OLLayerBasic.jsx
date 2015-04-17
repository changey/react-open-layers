var React = require('react');
var Actions = require('../actions/Actions');
var OLLayerStore = require('../stores/OLLayerStore');
var OLFeature = require('../components/OLFeature');
var _ = require('underscore');

function getFeatureState() {
  return {
    allFeatures: OLLayerStore.getAll(),
    selectedFeatureId: ""
  }
}

var EVENTS_RE = /on(?:Leaflet)?(.+)/i;

function extractLeafletEvents(props) {
  return reduce(props, (res, cb, ev) => {
    if (EVENTS_RE.test(ev)) {
      const key = ev.replace(EVENTS_RE, (match, p) => p.toLowerCase());
      res[ key ] = cb;
    }
    return res;
  }, {});
}

var OLLayerBasic = React.createClass({

  componentWillMount() {
    const baseLayer = new OpenLayers.Layer('base', {
      isBaseLayer: true,
      maxExtent: bounds
    });

    this.props.map.addLayer(baseLayer);

    var bounds = new OpenLayers.Bounds(-200, -200, 100, 100);

    this._olElement = new OpenLayers.Layer.Vector("vector1", {
      maxExtent: bounds
    });
    this.props.map.addLayer(this._olElement);

    const selectControl = new OpenLayers.Control.SelectFeature(
      [this._olElement],
      {
        clickout: true, toggle: false,
        multiple: false, hover: false,
        toggleKey: "ctrlKey", // ctrl key removes from selection
        multipleKey: "shiftKey" // shift key adds to selection
      }
    );

    this.props.map.addControl(selectControl);
    selectControl.activate();

  },

  _handleSelectFeature(e) {
    console.log("selected feature", e.feature.geometry.id);
    // this.setState({selectedFeatureId: e.feature.geometry.id});
  },

  componentDidMount() {
    this._olElement.events.on("featureselected", (event) => _handleSelectFeature);
  },

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {key: index, layer: this._olElement});
    });

    return (
      <div>
        {children}
      </div>
    )
  }
});

module.exports = OLLayerBasic;
