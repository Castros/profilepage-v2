/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
 xs: '300px',    
sm: '480px',
md: '768px',
lg: '976px',
xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        // darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        Blue1: 'hsl(214, 93%, 18%)',
        Blue2: 'hsl(203, 95%, 23%)',
        DarkBlue: 'hsl(235, 45%, 10%)',
       
        White1: 'hsl(0, 0%, 95%)',
        White2: 'hsl(0, 4%, 68%)',
        Orange1: 'hsl(39, 96%, 48%)',

      }



    },
  },
  plugins: [],
}
