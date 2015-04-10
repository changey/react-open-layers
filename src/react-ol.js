var div = React.DOM.div;

var OLMap = React.createClass({

	getInitialState: function() {
    return {
        showDialog: true
    };
  },

  render: function() {
		return this.state.showDialog ? (
      <div className="react-dialog dialog transparent-border full">
			  foo
      </div>
    ) : div();
  }
});

React.renderComponent(
	    <OLMap
			/>,
			document.getElementById('react')
);
