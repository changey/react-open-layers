var div = React.DOM.div;

var OLMap = React.createClass({displayName: "OLMap",

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

	componentDidMount: function() {
		var map = new ol.Map({
		    target: $('#olMap')[0],
		    layers: [
		    new ol.layer.Tile({
		        source: new ol.source.TileJSON({
		            url: 'http://api.tiles.mapbox.com/v3/mapbox.geography-class.jsonp'
		        })
		    }),
		    vectorLayer //When the vector layer is used both the features displays correctly.
		    //imageLayer //When the image layer is in use only the point feature is displayed.
		    ],
		    view: new ol.View({
		        center: [2952104.019976033, -3277504.823700756],
		        zoom: 4
		    })
		});
	},

	create_map: function() {
    console.log("bar");
	},

  render: function() {
		return this.state.showDialog ? (
      React.createElement("div", {className: "react-dialog dialog transparent-border full"}, 
			  "foo"
      )
    ) : div();
  }
});

React.renderComponent(
	    React.createElement(OLMap, null
			),
			document.getElementById('react')
);