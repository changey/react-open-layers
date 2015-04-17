var div = React.DOM.div;

var Olcomponent = React.createClass({displayName: "Olcomponent",

	getInitialState: function() {
    return {
        showDialog: true
    };
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
	    React.createElement(Olcomponent, null
			),
			document.getElementById('react')
);
