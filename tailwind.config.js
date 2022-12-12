/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'main-hero': "url('./Components/assets/new-hero.jpeg')",
        'hero-mobile': "url('./Components/assets/guest-gym.jpeg')"
      }
    },
  },
  plugins: [],
}