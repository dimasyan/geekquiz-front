module.exports = {
  purge: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      regular: 'Inter',
      large: 'InterBold',
      larger: 'InterExtraBold',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
