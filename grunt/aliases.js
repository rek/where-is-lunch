'use strict';

module.exports = {

	'run': [
		'connect:dev',
		'watch'
	],

	'dev': [
		'browserify:v2',
		'run',
	],

};
