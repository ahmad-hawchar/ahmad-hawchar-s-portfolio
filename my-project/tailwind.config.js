/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    //instead of using @media queries you can set specific styles for each screen size you choose
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
      }
  },
  plugins: [],
}