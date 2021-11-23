module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     'primary': '#00A9A5',
     'secondary': '#ffed4a',
     'danger': '#e3342f',
    })
  } ,
  variants: {
    extend: {},
  },
  plugins: [],
}
