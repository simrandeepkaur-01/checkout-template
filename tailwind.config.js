/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1436px',
    },
    extend: {
      fontFamily: {
        'heading': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'jost': ['Jost', 'sans-serif'],
      },
      screens: {
        'xs': '639px',
      },
    },
  },
  plugins: [],
}

