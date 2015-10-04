'use strict';

module.exports = {
	options: {
		spawn: true,
		livereload: true
		// livereload: 8083
	},

	js: {
		files: ['scripts/*.js', 'scripts/**/*.js'],
		tasks: ['browserify'],
	},

	main: {
		files: [
			'Gruntfile.js',
			'grunt/*.js',
			'scripts/*.js',
			'scripts/**/*.js',
			'index.html',
		]
	}
};
