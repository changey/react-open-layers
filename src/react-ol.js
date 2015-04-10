var div = React.DOM.div;

var OLMap = React.createClass({

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
		        zoom: parseInt(this.props.zoom)
		    })
		});
	},

	create_map: function() {
    console.log("bar");
	},

  render: function() {
		return (
			<div className="olMap">
			  foo
      </div>
		)
  }
});

React.renderComponent(
	    <OLMap
        zoom="4"
				// cancelButtonText="Cancel"
				// okAction={this.okAction}
			/>,
			document.getElementById('react')
);
