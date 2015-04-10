var div = React.DOM.div;

var Dialog = React.createClass({displayName: "Dialog",

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

	componentDidMount: function() {
    $(document.body).on('keydown', this.handleKeyDown);
  },

  componentWillUnMount: function() {
    $(document.body).off('keydown', this.handleKeyDown);
  },

	cancelAction() {
    this.setState({
      showDialog: false
    });
  },

	okAction: function() {
    this.setState({
      showDialog: false
    });
  },

	handleKeyDown: function(event) {
    if (event.keyCode == 13 /*enter*/) {
      this.okAction();
    }
    if (event.keyCode == 27 /*esc*/) {
      this.cancelAction();
    }
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
			document.getElementById('content')
);
