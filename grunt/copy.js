'use strict';

module.exports = {
	dist: {
		files: [{
			expand: true,
			flatten: false,

			cwd: 'scripts/v2',
			src: ['**/*.js'],
			dest: 'out/v2',
		}],
	}
};
