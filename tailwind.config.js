/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.{html,js}'],
  theme: {
    screens : {
      sm : '592px',
      md : '768px',
      lg : '992px',
      xl : '1200px'
    },
    extend: {
      colors : {
        clr_primary_1: 'hsl(21, 91%, 17%)',
        clr_primary_2: 'hsl(21, 84%, 25%)',
        clr_primary_3: 'hsl(21, 81%, 29%)',
        clr_primary_4: 'hsl(21, 77%, 34%)',
        /* primary/main color */
        clr_primary_5: 'hsl(21, 62%, 45%)',
        /* lighter shades of primary color */
        clr_primary_6: 'hsl(21, 57%, 50%)',
        clr_primary_7: 'hsl(21, 65%, 59%)',
        clr_primary_8: 'hsl(21, 80%, 74%)',
        clr_primary_9: 'hsl(21, 94%, 87%)',
        clr_primary_10: 'hsl(21, 100%, 94%)',
        /* darkest grey _ used for headings */
        clr_grey_1: '#102a42',
        clr_grey_2: 'hsl(211, 39%, 23%)',
        clr_grey_3: 'hsl(209, 34%, 30%)',
        clr_grey_4: 'hsl(209, 28%, 39%)',
        /* grey used for paragraphs */
        clr_grey_5: 'hsl(210, 22%, 49%)',
        clr_grey_6: 'hsl(209, 23%, 60%)',
        clr_grey_7: 'hsl(211, 27%, 70%)',
        clr_grey_8: 'hsl(210, 31%, 80%)',
        clr_grey_9: 'hsl(212, 33%, 89%)',
        clr_grey_10: 'hsl(210, 36%, 96%)',
        clr_white: '#fff',
        clr_red_dark: 'hsl(360, 67%, 44%)',
        clr_red_light: 'hsl(360, 71%, 66%)',
        clr_green_dark: 'hsl(125, 67%, 44%)',
        clr_green_light: 'hsl(125, 71%, 66%)',
        clr_black: '#222',
        grey : '#f1f7f8',
        black_50 : 'rgba(0,0,0,0.5)',
      },
      transitionDelay : {
        t_3 : `0.3s`,
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/main-bcg.jpeg')",
     },
     fontFamily : {
      ff : "'Kaushan Script', cursive;",
     },
     borderWidth : {
        1 : '1px',
     },
     gridTemplateColumns : {
        '1000' : `repeat( auto-fit, minmax(350px, 1fr) );`,
        '2000' : `repeat(3 , 1fr);`,
        '3000' : `repeat( auto-fit, minmax(320px, 1fr) );`,
     },
     width : {
      0.75 : '3px;',
     },
     maxWidth : {
      75 : '75px;',
     },
     minHeight : {
        57 : '57vh',
        400 : '400px'
     },
     height : {
      1002 : '95vh',
     },
     rotate : {
      n : '22deg;',
     },
     fontSize : {
      '4.5xl' : '40px;',
     },
     spacing : {
      '10%' : '10%',
      '2.5vh' : '2.5vh',
     },
     zIndex: {
      '2': '2',
      '3': '3',

    }
    },
  },
  plugins: [],
}