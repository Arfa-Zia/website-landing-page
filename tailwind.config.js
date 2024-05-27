/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.html' , './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        'color-shade': {
          1: '#43A046' , 
          2: '#388e3b' ,
          3: '#237d31' ,
          4: '#1b5e1f' ,
          5: '#103e13' ,
          6: '#43A0463d' , 
        },
        neutral: {
          silver: '#F5F7FA',
          black: "#263238",
          white: "#FFFFFF1f"
        }
      },
      fontFamily: {
        inter: ['Inter',...defaultTheme.fontFamily.sans],

      },
      keyframes:{
        'slide':{
          '0%':{
            transform: 'translateX(0)'
          },
          '25%':{
            transform: 'translateX(0)'
          },
          '30%':{
            transform: 'translateX(-100%)'
          },
          '50%':{
            transform: 'translateX(-100%)'
          },
          '55%':{
            transform: 'translateX(-200%)'
          },
          '75%':{
            transform: 'translateX(-200%)'
          },
          '100%':{
            transform: 'translateX(-300%)'
          }
        }
      },
      animation:{
        'slide': 'slide  16s  infinite'
      }

    },
  },
  plugins: [],
}

