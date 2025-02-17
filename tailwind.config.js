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
        OtherBgColor: '#FBFBFB',
        DangerBg: '#F6D0D0',
        RedColor: '#A12222',
        greyColor:' #A0A0A0',
        greyColorII: 'A5A5A5',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      keyframes: {
        infiniteScroll: {
          'from': { transform: 'translateX(0)' },
          'to': {transform: 'translateX(-50%)'},
        },
      },
      animation: {
        'infinite-scroll': 'infiniteScroll 60s linear infinite',
      }
    },
  },
  plugins: [],
}

