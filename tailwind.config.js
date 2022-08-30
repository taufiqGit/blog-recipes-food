/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "Merriweather": ['Merriweather', 'serif'],
      "Roboto": ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
