'use strict'

var React = require('react')

var OLMap = React.createClass({

  componentDidMount: function() {
		this.props.map.setCenter((new OpenLayers.LonLat(14975000,4268330)), parseInt(this.props.zoom));
  },

  render: function() {
		return (
			<div id="map">
      </div>
		)
  }
});

module.exports = OLMap;
