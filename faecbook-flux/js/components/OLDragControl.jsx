var React = require("react");

var DragControl = React.createClass({
  componentWillMount() {
    this._olElement = new OpenLayers.Control.DragFeature(this.props.layer, {
      autoActivate: true,
      onComplete: this.props.onComplete
    });

    this.props.map.addControl(this._olElement);

    // this._olElement.events.on("oncomplete", this.props.onDragComplete);
  },

  componentWillUnMount() {
    console.log("DragControl going bye bye")

    this._olElement.events.off();
    this.props.map.removeControl(this._olElement);
  },

  render() {
    return null;
  }
})

module.exports = DragControl;
