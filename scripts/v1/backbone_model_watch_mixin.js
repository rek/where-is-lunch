'use strict';

/**
 * Automatically re-render a React component when one or more backbone
 * models emit any events. Automatically binds and unbinds during the normal
 * React component lifecycle hooks.
 *
 *   React.createClass({
 *     mixins: [BackboneModelWatchMixin],
 *
 *     getBackboneModels: function() {
 *       return [this.props.model, someOtherModel];
 *     }
 *   });
 *
 */

var _ = require('underscore');

module.exports = {
	componentDidMount: function() {
		this._watchedBackboneModels = this.getBackboneModels();

		_.each(this._watchedBackboneModels, function(model) {
			model.on('all', this._doBackboneUpdate);
		}, this);
	},

	componentWillUnmount: function() {
		_.each(this._watchedBackboneModels, function(model) {
			model.off('all', this._doBackboneUpdate);
		}, this);
	},

	_doBackboneUpdate: function() {
		if (this.isMounted()) {
			this.forceUpdate();
		}
	},
};