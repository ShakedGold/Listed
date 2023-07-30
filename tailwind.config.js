// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['"Fira Sans Condensed Medium"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}