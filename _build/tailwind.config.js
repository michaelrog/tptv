const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: {
		files: [
			'src/index.html',
			'src/css/**/*.{pcss,css}',
		],
	},
	safelist: [],
	theme: {
		extend: {
			colors: {
				warm: colors.stone,
				green: '#18693B',
			},
			fontFamily: {
				'accent': ['Avenir', 'monospace'],
			},
		},
	},
	plugins: [],
};
