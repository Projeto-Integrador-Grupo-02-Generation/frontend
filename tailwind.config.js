/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-sea": "#003B66",
        "shallow-sea" : "#5690B9",
        "baby-blue" : "#D1ECFF",
        "emphasis-blue" : "#5A91B7",
        "algae-green" : "#00D147"
      },
      fontFamily : {
        "inter" : ["Inter"],
        "nico-moji" : ["NicoMoji-Regular"]
      }
    },
  },
  plugins: [],
}