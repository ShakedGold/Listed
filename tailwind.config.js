// tailwind.config.js
module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#061A86",
				accent: "#061A86",
				fadedaccent: "#162997",
			},
			height: {
				interact: "2.5rem",
			},
		},
		fontFamily: {
			primary: ['"Fira Sans Condensed Medium"'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
