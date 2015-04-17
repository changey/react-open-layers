var div = React.DOM.div;

var OLMap = React.createClass({displayName: "OLMap",

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

	componentDidMount: function() {
    this.create_map();
	},

	create_map: function() {

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
