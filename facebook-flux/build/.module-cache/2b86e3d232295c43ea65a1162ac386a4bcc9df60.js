var Dialog = React.createClass({displayName: "Dialog",

	okAction() {
    this.props.okAction();
    this.setState({
      showDialog: false
    });
  },
	
  render: function() {
		return (
			React.createElement("div", {className: "react-dialog dialog transparent-border full"}, 
			React.createElement("div", {className: "inside"}, 
				React.createElement("h2", null, React.createElement("span", null, this.props.text)), 
				React.createElement("div", {className: "buttons"}, 
			  	React.createElement("button", {className: "cancel-button", onClick: this.cancelAction}, React.createElement("span", null, this.props.cancelButtonText)), 
		  		React.createElement("button", {className: "ok-button", onClick: this.okAction}, React.createElement("span", null, this.props.okButtonText))
				)
			)
		)
  	);
  }
});

React.renderComponent(
	    React.createElement(Dialog, {
				text: "Do you want to continue?", 
				okButtonText: "OK", 
				cancelButtonText: "Cancel", 
				okAction: this.okAction}
			),
    document.body
);
