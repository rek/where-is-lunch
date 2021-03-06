'use strict';

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

require('backbone.marionette');

var React = require('react');

module.exports = {
    onShow: function() {
    	console.log('View showing', this);

        if (this._reactMountEl) {
            React.unmountComponentAtNode(this._reactMountEl);
        }

        this._reactMountEl = this.$el[0];
        var component = this.getReactComponent();

        console.log('React', React);
        React.constructAndRenderComponent(component, this._reactMountEl);
    },

    onClose: function() {
        if (this._reactMountEl) {
            React.unmountComponentAtNode(this._reactMountEl);
        }
    }
};
