const colors = require('tailwindcss/colors')

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
    colors: {
      yellow: {
        light: '#F3f383',
        DEFAULT: '#F2ED01',
        dark: '#Afaa08',
      },
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.indigo,
      white: colors.white,
      black: colors.black,
      green: colors.green,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
