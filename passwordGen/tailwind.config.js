/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '100vw':'100vw',
        '6':'6%',
        '80':'80%',
        '90':'90%'
      },
      height:{
        '100vw':'100vw',
        '80':'80%',
        '98':'98%'
      }
    },
  },
  plugins: [],
}

