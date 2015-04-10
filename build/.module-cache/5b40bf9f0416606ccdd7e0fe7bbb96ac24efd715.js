var Picture = React.createClass({displayName: "Picture",
	render: function() {
		return (
	            React.createElement("div", null, 
	                React.createElement("h1", null, "Popular Instagram pics")
	            )

	        );
	}
});

var Dialog = React.createClass({displayName: "Dialog",
  render: function() {
		return (
			React.createElement("div", {className: "react-dialog dialog transparent-border full"}, 
			React.createElement("div", {className: "inside"}, 
				React.createElement("h2", null, React.createElement("span", null, this.props.text)), 
				React.createElement("div", {className: "buttons"}, 
					React.createElement("button", {className: "ok-button", onClick: this.okAction}, React.createElement("span", null)), 
					React.createElement("button", {className: "cancel-button", onClick: this.cancelAction}, React.createElement("span", null, "foo"))
				)
			)
		)
  	);
  }
});

React.renderComponent(
    React.createElement(Dialog, null),
    document.body
);
