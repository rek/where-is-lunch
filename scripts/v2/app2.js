'use strict';

var React = require('react'),
	BlogComponent = require('../../out/v2/components/blog'),
	BlogCollection = require('../../out/v2/collections/blog');

require('backbone');
require('backbone-react-component');

// document.body.innerHTML = componentAndData.component;
// console.log('document.body.innerHTML', document.body.innerHTML);

var blogCollection = new BlogCollection();

blogCollection.add({
	id: '1',
	title: 'test',
	content: 'awesome content',
});

// console.log('blogCollection', blogCollection);
// console.log(document.getElementById('data'));

React.render(

	// what to render:
	React.createElement(BlogComponent, {collection: blogCollection}),

	// location to render it:
	document.getElementById('data')
);
