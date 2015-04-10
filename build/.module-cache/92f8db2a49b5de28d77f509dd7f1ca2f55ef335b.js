var Picture = React.createClass({displayName: "Picture",
	render: function() {
		return (
	            React.createElement("div", null, 
	                React.createElement("h1", null, "Popular Instagram pics")
	            )

	        );
	}
});

React.createClass({
  render: function() {
		return (
	    React.createElement("h1", null, "Hello, world!")
  	);
  }
});

// React.renderComponent(
//     <Dialog />,
//     document.body
// );
