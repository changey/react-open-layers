var React = require('react')
var OLFeature =require("./OLFeature")

var OLFeatures = React.createClass({

  getInitialState() {
    return {
      features: []
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

    this.setState({features: features})
    },

    render() {

      var map = this.props.map;

      return (
        <div className="features">
          {this.state.features.map(function(f) {
            //return <div>foo</div>
            return (  <OLFeature map = {map}
              position = {f.position}
              id = {f.id}>
              baz
            </OLFeature>
          )
        })}
      </div>
    )
  }
});

module.exports = OLFeatures;
