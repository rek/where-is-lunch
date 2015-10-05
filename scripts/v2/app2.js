'use strict';

var React = require('react'),
	Backbone = require('backbone'),
	BlogComponent = require('../../out/v2/components/blog'),
	BlogCollection = require('../../out/v2/collections/blog');

require('backbone-react-component');

// document.body.innerHTML = componentAndData.component;

// console.log('document.body.innerHTML', document.body.innerHTML);

var blogCollection = new BlogCollection();

React.render(React.createElement(BlogComponent), document.getElementById('data'), {collection: blogCollection}, document.body);
