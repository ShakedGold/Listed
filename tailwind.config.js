// tailwind.config.js
module.exports = {
	mode: "jit",
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				interact: "2.8rem",
			},
			backgroundColor: {
				primary: "#061A86",
				accent: "#061A86",
				fadedaccent: "#162997",
			},
			text: {
				primary: "#061A86",
				accent: "#061A86",
				fadedaccent: "#162997",
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
