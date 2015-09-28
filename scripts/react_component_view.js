/**
 * Easily create a Marionette view that contains a React component and mount/unmount
 * it as appropriate in `onShow`/`onClose`.
 *
 *  Marionette.View.extend(ReactComponentView).extend({
 *    initialize: function(options) {
 *      this.model = options.model;
 *    },
 *
 *    getReactComponent: function() {
 *      return SomeComponent({model: this.model});
 *    }
 *  });
 *
 */

var React = require("../bower_components/react/react");

module.exports = {
  onShow: function() {
    if (this._reactMountEl) {
      React.unmountComponentAtNode(this._reactMountEl);
    }

    this._reactMountEl = this.$el[0];
    var component = this.getReactComponent();
    React.renderComponent(component, this._reactMountEl);
  },

  onClose: function() {
    if (this._reactMountEl) {
      React.unmountComponentAtNode(this._reactMountEl);
    }
  }
};