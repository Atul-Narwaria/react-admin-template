/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#111c43',
      'secondary':'#474E68',
      'primary-l':'#50577A',
      'secondary-l':'#6B728E',
      'gray-main':'#f8f9fa',
      "dark-purple": "#111c43",
      "light-white": "rgba(255,255,255,0.17)",
      "white":colors.white,
      'blue': colors.blue,
      'cyan': colors.cyan,
      'gray':colors.gray,
      'dark':colors.black,
      'red':colors.red,
      'green':colors.green,
      'yellow':colors.yellow,
      'purple':colors.purple,
      'dark-blue':'#0d1b30'
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
    },
  },
  plugins: [],
}