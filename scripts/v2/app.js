'use strict';

document.body.innerHTML = componentAndData.component;
var blogCollection = new BlogCollection(componentAndData.data);
React.renderComponent(BlogComponent({collection: blogCollection}), document.body);