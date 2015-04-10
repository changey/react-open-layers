// React.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('example')
// );

var Picture = React.createClass({displayName: "Picture",
	render: function() {
		return (
	            React.createElement("div", null, 
	                React.createElement("h1", null, "Popular Instagram pics")
	            )

	        );
	}
});
React.renderComponent(
    React.createElement(Picture, null),
    document.body
);
