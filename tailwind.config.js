/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'mobile-facilitypicture': "url(''./Components/assets/hero-mobile.jpeg'')",
        'facility-picture': "url(''./Components/assets/hero-image.jpeg'')"
      }
    },
  },
  plugins: [],
}