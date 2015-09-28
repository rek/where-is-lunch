var React = require("../bower_components/react/react"),
    BackboneModelWatchMixin = require("./backbone_model_watch_mixin"),
    Ticket = require("./entity");

var MyReactComponent = React.createClass({
  mixins: [BackboneModelWatchMixin],

  propTypes: {
    ticket: React.PropTypes.instanceOf(Ticket).isRequired
  },

  getBackboneModels: function() {
    return [this.props.ticket, this.props.ticket.get("comments")];
  },

  render: function() {
    if (this.props.ticket.isComplete()) {
      return '<div>...</div>';
    } else {
      return '<div onClick={this.completeTicket}>...</div>';
    }
  },

  completeTicket: function() {
    this.props.ticket.complete();
  }
});

module.exports = MyReactComponent;