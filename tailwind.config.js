/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Robotto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70%, 28%',
        '33/33/33': '33%, 33%, 29%',
      }
    },
  },
  plugins: [],
}