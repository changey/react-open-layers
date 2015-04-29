var React = require('react');
var OLFeature = require('../components/OLFeature');

var OLLayerBasic = React.createClass({

  componentWillMount() {
    const baseLayer = new ol.layer.Tile({
      isBaseLayer: true //,
    //  maxExtent: bounds
    });

    this.props.map.addLayer(baseLayer);

  //  var bounds = new ol.bounds(-200, -200, 100, 100);

    var defaultStyleOptions = {
            strokeColor: '#00F',
            display: 'block',
            cursor: 'crosshair',
            strokeWidth: 5,
            fillOpacity: 1
          };

    //const styleMap = new ol.style.StyleMap(defaultStyleOptions);
    const style = new ol.style.Style({
      externalGraphic: '../images/pikachu.png'
    })

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
    // styleMap.addUniqueValueRules("default", "type", DEFAULT_GRAPHICS);
    // styleMap.addUniqueValueRules("select", "type", SELECT_GRAPHICS);

    this._olElement = new ol.layer.Vector("ol layer basic", {
//      maxExtent: bounds,
      rendererOptions: {zIndexing: true},
      style: style
    });
    this.props.map.addLayer(this._olElement);

    var vectorSource = new ol.source.Vector({
      //create empty vector
    });

    //create a bunch of icons and add to source vector
    for (var i = 0; i < 50; i++){

        var iconFeature = new ol.Feature({
          geometry: new
            ol.geom.Point(ol.proj.transform([Math.random()* 360 -180, Math.random()*180-90], 'EPSG:4326',   'EPSG:3857')),
        name: 'Null Island ' + i,
        population: 4000,
        rainfall: 500
        });
        vectorSource.addFeature(iconFeature);
    }

    //create the style
    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../images/pikachu.png',
        scale: 0.06
      }))
    });



    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: iconStyle
    });

    this.props.map.addLayer(vectorLayer);
    //
    // const selectControl = new ol.Control.SelectFeature(
    //   [this._olElement],
    //   {
    //     clickout: true,
    //     toggle: false,
    //     multiple: false,
    //     hover: false,
    //     toggleKey: "ctrlKey", // ctrl key removes from selection
    //     multipleKey: "shiftKey" // shift key adds to selection
    //   }
    // );
    //
    // this.props.map.addControl(selectControl);
    // selectControl.actiavate();
  },

  _handleSelectFeature(obj) {
    const { feature } = obj;
    this.props.onFeatureSelected(feature.geometry.id);
  },

  componentDidMount() {
    //this._olElement.events.on({'featureselected': (obj) => this._handleSelectFeature(obj) });
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
