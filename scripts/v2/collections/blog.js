'use strict';

// (function(root, factory) {
//     if (typeof module !== 'undefined') {
//         var Backbone = require('backbone');
//         module.exports = factory(Backbone);
//     } else
//         root.BlogCollection = factory(this.Backbone);
// }(this, function(Backbone) {
//     'use strict';
//     var;

//     return BlogCollection;
// }));

var Backbone = require('backbone');

var model = Backbone.Model.extend({
	save: function() {
		return this;
	},

});

var collection = Backbone.Collection.extend({
	url: 'resources/blog',
	model: model,

	save: function() {
		return this;
	},
});

module.exports = collection;
