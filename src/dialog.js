var div = React.DOM.div;

var Dialog = React.createClass({

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
      <div className="react-dialog dialog transparent-border full" onKeyDown={this.handleKeyDown}>
        <div className="inside">
          <h2><span>{this.props.text}</span></h2>
          <div className="buttons">
						<button className="cancel-button" onClick={this.cancelAction}><span>{this.props.cancelButtonText}</span></button>
						<button className="ok-button" onClick={this.okAction}><span>{this.props.okButtonText}</span></button>
          </div>
        </div>
      </div>
    ) : div();
  }
});

React.renderComponent(
	    <Dialog
				text="Do you want to continue?"
				okButtonText="OK"
				cancelButtonText="Cancel"
				okAction={this.okAction}
			/>,
    document.body
);
