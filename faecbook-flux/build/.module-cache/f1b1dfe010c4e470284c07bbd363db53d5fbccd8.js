var div = React.DOM.div;

var Dialog = React.createClass({displayName: "Dialog",

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
	    React.createElement(Dialog, null
			),
			document.getElementById('react')
);
