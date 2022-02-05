const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
