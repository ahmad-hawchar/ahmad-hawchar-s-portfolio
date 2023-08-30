/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': {
          '50': '#f1f2ff',
          '100': '#e6e5ff',
          '200': '#ceceff',
          '300': '#aaa7ff',
          '400': '#8176ff',
          '500': '#583fff',
          '600': '#4318ff',
          '700': '#3407fa',
          '800': '#2b05d2',
          '900': '#2506ac',
          '950': '#0c0052',
      },
      }
    },
    fontFamily: {
      'Permanent': ['Permanent Marker', 'sans-serif']
    },
    //instead of using @media queries you can set specific styles for each screen size you choose
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
