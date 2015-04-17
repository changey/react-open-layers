React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);

var Picture = React.createClass({displayName: "Picture",
  clickHandler: function() {
  	this.props.onClick(this.props.ref);
  },

  render: function() {
  	var cls = 'picture ' + (this.props.favorite ? 'favorite' : ''); 
  }
});