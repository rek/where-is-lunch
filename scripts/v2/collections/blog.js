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


'use strict';

var Backbone = require('backbone');

module.exports = {
    BlogCollection: Backbone.Collection.extend({
        url: 'resources/blog'
    })
};
