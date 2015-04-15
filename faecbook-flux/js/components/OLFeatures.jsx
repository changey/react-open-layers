var React = require('react');
var OLFeature =require("./OLFeature");
var div = React.DOM.div;
var _ = require('underscore');

var OLFeatures = React.createClass({

  getInitialState() {
    return {
      features: [],
      render: false
    };
  },

  componentWillMount() {

    var features = [];
    var size = 2;

    for(var i = 0; i < size; i++) {
      features.push({
        position: i,
        id: i
      })
    }

    this.setState({features: features});
    //this.setState({render: _.size(this.props.features.allFeatures) !== 0})
  },

  componentDidUpdate() {
    console.log(_.size(this.props.features.allFeatures) === 0)
  },

  render() {

    var map = this.props.map;
    var layer = this.props.layer;
    var features = this.props.features.allFeatures;

    return this.state.render ? (
      <div className="features">
        {features.map(function(f) {
          //return <div>foo</div>
          return (  <OLFeature map = {map}
            position = {f.position}
            id = {f.id}
            layer = {layer}>
            baz
          </OLFeature>
        )
      })}
    </div>
  ) : div()
}
});

module.exports = OLFeatures;
