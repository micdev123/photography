/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'darkblue': '#4141A5',
        'gray': '#F5F5FA',
        'lightblack': '#6F6681'
      }
    },
  },
  plugins: [],
}
