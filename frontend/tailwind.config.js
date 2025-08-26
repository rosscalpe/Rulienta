/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'rulienta': {
          'primary': '#32a3a3',
          'secondary': '#2d7a7a',
          'light': '#4dc4c4',
          'dark': '#1e5555'
        }
      }
    },
  },
  plugins: [],
}

