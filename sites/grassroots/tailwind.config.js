const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        "dark": "#222",
        "emerald": "#0E2119",
        "highlight": "#7DB67F",
        "green": colors.green
      },
    },
  },
  plugins: []
}
