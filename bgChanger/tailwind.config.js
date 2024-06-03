/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90': '90%',
        '5': '5%'
      },
      width: {
        '80': '80%',
        '5': '5%'
      }
    },
  },
  plugins: [],
}

