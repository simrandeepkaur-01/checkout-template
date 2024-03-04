/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        'heading': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'jost': ['Jost', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
      },
    },
    container:{
      screens: {
        '2xl':'1436px'
      }
    }
  },
  plugins: [],
}

