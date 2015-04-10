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
		return(
	    React.createElement("h1", null, "Hello, world!"),
	    document.getElementById('example')
  	);
  }
});

React.renderComponent(
    React.createElement(Dialog, null),
    document.body
);
