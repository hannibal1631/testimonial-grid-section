/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'name-grey': 'hsla(0, 0%, 20%, 1)',
        'sub-name-grey': 'hsla(0, 0%, 45%, 0.5)',
        'quote-grey': 'hsla(0, 0%, 45%, 0.7)',
      },
      fontFamily: {
        custom: ['Barlow Semi Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
