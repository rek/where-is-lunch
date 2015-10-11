'use strict';

module.exports = {

	'run': [
		'connect:dev',
		'watch'
	],

	'dev': [
		'clean',
		'react',
		'copy',
		'browserify:v2',
		'run',
	],

};
