/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        exo: ["'Exo 2'", 'sans-serif'],
      },
      fontSize: {
        '5/5xl': '3.5rem',
        '5/2xl': '3.2rem',
        '4/5xl': '2.5rem',
        '2/5xl': '1.6rem'
      },
      textColor: {
        'lead': 'rgb(255 255 255 / 90%)',
        'lead-dark': '#565973'
      },
      backgroundImage: {
        'grad': 'linear-gradient(220deg, #015c3b 0%, #112c1d 100%)',
        'cart': 'linear-gradient(220deg, #8910a705 0%, #4349c514 100%)',
        'hovergrad': 'linear-gradient(220deg, #4349c5 0%, #b113d8 100%)'
      },
      backgroundColor: {
        'light': '#044a3029',
        'bordo': '#0d0212'
      },
      borderColor: {
        'btnsec': 'rgb(255 255 255 / 25%)'
      },
      borderWidth: {
        '1': '1px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

