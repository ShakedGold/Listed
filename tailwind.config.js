const { scopedPreflightStyles } = require('tailwindcss-scoped-preflight');

// tailwind.config.js
module.exports = {
	mode: 'jit',
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#061A86',
				accent: '#061A86',
				fadedaccent: '#162997',
			},
			height: {
				interact: '2.5rem',
			},
		},
		fontFamily: {
			primary: ['"Fira Sans Condensed Medium"'],
			roboto: ['"Roboto"'],
			'roboto-md': ['"Roboto Medium"'],
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		scopedPreflightStyles({
			cssSelector: '.notw', // or .notailwind or even [data-tailwind=false] - any valid CSS selector of your choice
			mode: 'except matched',
		}),
	],
};
