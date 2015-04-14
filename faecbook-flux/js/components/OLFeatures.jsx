var React = require('react')
var OLFeature =require("./OLFeature")

var OLFeatures = React.createClass({

  render() {
    return (
      <OLFeature map = {this.props.map}>
        baz
      </OLFeature>
    )
  }
});

module.exports = OLFeatures;
