/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'color-shade': {
          1: '#43A046' , 
          2: '#388e3b' ,
          3: '#237d31' ,
          4: '#1b5e1f' ,
          5: '#103e13' ,
        },
        neutral: {
          silver: '#F5F7FA',
          black: "#263238",
          white: "#FFFFFF1f"
        }
      },
      fontFamily: {
        inter: ['Inter',...defaultTheme.fontFamily.sans],

      }
    },
  },
  plugins: [],
}

