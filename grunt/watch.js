'use strict';

module.exports = {
	options: {
		spawn: true,
		livereload: true
		// livereload: 8083
	},

	js: {
		files: ['out/*.js', 'out/**/*.js'],
		tasks: ['browserify:v2'],
	},

	main: {
		files: [
			'Gruntfile.js',
			'grunt/*.js',
			'build/*.js',
			'index.html',
		]
	},

	copy: {
		files: [
			'scripts/v2/*.js',
			'scripts/v2/**/*.js'
		],
		tasks: ['copy']
	},

	jsx: {
		files: ['scripts/**/*.jsx'],
		tasks: ['react'],
	},
};
