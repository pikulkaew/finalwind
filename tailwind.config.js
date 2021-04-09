module.exports = {
  mode : 'jit',
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ['Montserrat','Kanit','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
