var React = require('react')
var OLFeature =require("./OLFeature")

var OLFeatures = React.createClass({

  getInitialState() {
    return {
      features: []
    };
  },

  componentWillMount() {

    this.setState({features: [
      {position: 1},
      {position: 2}]})
    },

    render() {

      // var size = 2;

      var features = this.state.features.map(function(f) {
        return <div>foo</div>
      });

      console.log(this.features)
      // var features = [];

      var map = this.props.map;
      console.log(map)

      return (
        <div className="features">
          {this.state.features.map(function(f) {
            //return <div>foo</div>
            return (  <OLFeature map = {map}
              position = {f.position}>
              baz
            </OLFeature>
          )
        })}
      </div>
    )
  }
});

module.exports = OLFeatures;
