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
          '50': '#fff3fe',
          '100': '#ffe7fd',
          '200': '#ffcefb',
          '400': '#ffa7f6',
          '500': '#f83de4',
          '600': '#dc1dc4',
          '700': '#b7149e',
          '800': '#951380',
          '900': '#7a1568',
          '950': '#520043',
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
