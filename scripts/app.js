var Marionette = require('backbone.marionette'),
    ReactComponentView = require("./react_component_view"),
    TicketViewComponent = require("./ticket_view_component");

module.exports = Marionette.View.extend(ReactComponentView).extend({
  initialize: function(options) {
    this.ticket = options.model;

    console.log('init');
  },

  getReactComponent: function() {
    return TicketViewComponent({ticket: this.ticket});
  }
});
