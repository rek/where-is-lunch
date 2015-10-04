'use strict';

var Marionette = require('backbone.marionette'),
	viewClass = require('./view');

var view = new viewClass({
});

var app = new Marionette.Application();

app.addRegions({
	'main': '#data'
});

app.main.show(view);

console.log('View', view);
