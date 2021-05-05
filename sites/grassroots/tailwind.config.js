module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark": "#222",
        "emerald": "#0E2119",
        "highlight": "#7DB67F"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
