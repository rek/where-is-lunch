'use strict';

var React = require('react'),
	// $ = require('jquery'),
	componentAndData = require('../../build/v2/components/blog'),
	BlogCollection = require('./collections/blog');

console.log('componentAndDatacomponentAndDatacomponentAndData', componentAndData);

require('backbone-react-component');

// $.get('build/components/blog.js', function (componentAndData) {
	console.log('componentAndData', componentAndData);
	document.body.innerHTML = componentAndData.component;
	console.log('document.body.innerHTML', document.body.innerHTML);
	var blogCollection = new BlogCollection(componentAndData.data);
	React.renderComponent(BlogComponent({collection: blogCollection}), document.body);
// });
