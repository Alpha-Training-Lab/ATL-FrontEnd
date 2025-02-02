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
        RedColor: '#A12222'
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': {transform: 'translateX(-50%)'},
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
        // 'scroll-large': 'scroll 25s linear infinite',
      }
    },
  },
  plugins: [],
}

