var React = require('react');
var OLFeature = require('../components/OLFeature');

var OLLayerBasic = React.createClass({

  componentWillMount() {
    const baseLayer = new OpenLayers.Layer('base', {
      isBaseLayer: true,
      maxExtent: bounds
    });

    this.props.map.addLayer(baseLayer);

    var bounds = new OpenLayers.Bounds(-200, -200, 100, 100);

    var defaultStyleOptions = {
            strokeColor: '#00F',
            display: 'block',
            cursor: 'crosshair',
            strokeWidth: 5,
            fillOpacity: 1
          };
    const styleMap = new OpenLayers.StyleMap(defaultStyleOptions);

    var DEFAULT_GRAPHICS = {
      'feature': {
        externalGraphic: '../images/pikachu.png',
        graphicWidth: 40,
        graphicHeight: 40
      }
    }
    var SELECT_GRAPHICS = {
      'feature': {
        externalGraphic: '../images/songoku.png',
      }
    }
    styleMap.addUniqueValueRules("default", "type", DEFAULT_GRAPHICS);
    styleMap.addUniqueValueRules("select", "type", SELECT_GRAPHICS);

    this._olElement = new OpenLayers.Layer.Vector("ol layer basic", {
      maxExtent: bounds,
      rendererOptions: {zIndexing: true},
      styleMap: styleMap
    });
    this.props.map.addLayer(this._olElement);

    const selectControl = new OpenLayers.Control.SelectFeature(
      [this._olElement],
      {
        clickout: true,
        toggle: false,
        multiple: false,
        hover: false,
        toggleKey: "ctrlKey", // ctrl key removes from selection
        multipleKey: "shiftKey" // shift key adds to selection
      }
    );

    this.props.map.addControl(selectControl);
    selectControl.activate();
  },

  _handleSelectFeature(obj) {
    const { feature } = obj;
    this.props.onFeatureSelected(feature.geometry.id);
  },

  componentDidMount() {
    this._olElement.events.on({'featureselected': (obj) => this._handleSelectFeature(obj) });
  },

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {key: child.key || index, map: this.props.map, layer: this._olElement});
    });

    return (
      <div>
        {children}
      </div>
    )
  }
});

module.exports = OLLayerBasic;
