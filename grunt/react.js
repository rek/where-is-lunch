'use strict';

module.exports = {
	dev: {
		files: [
			{
				expand: true,
				cwd: 'scripts/v2',
				src: ['**/*.jsx'],
				dest: 'out/v2',
				ext: '.js'
			}
		],
	},
};
