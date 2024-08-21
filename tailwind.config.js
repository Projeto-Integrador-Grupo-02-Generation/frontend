/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'deep-sea': '#003B66',
      'shallow-sea' : '#5690B9',
      'baby-blue' : '#D1ECFF',
      'emphasis-blue' : '#5A91B7',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'algae-green' : '#00D147'
    },
    extend: {},
  },
  plugins: [],
}