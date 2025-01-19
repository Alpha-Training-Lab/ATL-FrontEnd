/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F06105',
        secondary: '#043D39',
        priText: '#131313',
        bgColor: '#FFFFFF',
        stepsBgColor: '#032624',
        OtherBgColor: '#FBFBFB'
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

