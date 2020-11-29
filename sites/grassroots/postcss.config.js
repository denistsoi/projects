const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    'tailwindcss',
    purgecss({
      content: ['./**/*.html']
    })
  ],
}