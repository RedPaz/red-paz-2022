/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.ts",
    "./resources/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['AncizarSans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-unal': {
          100: '#777777',
          200: '#666666',
          300: '#555555',
          400: '#5b5b5b',
          500: '#484848',
          600: '#383838',
          700: '#3A3B3A',
          800: '#333333',
        },
        'green-unal': '#50992e',
        'green-red': '#4DB372',
      },
      backgroundImage: {
        social: "url('/images/header-unal/redes_sociales.png')"
      },
    },
  },
  plugins: [],
}
