/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad5a5',
          300: '#f6b86d',
          400: '#f29133',
          500: '#ef7211',
          600: '#e05707',
          700: '#b94008',
          800: '#93330e',
          900: '#772c0f',
          950: '#401305',
        },
        gold: {
          400: '#f5c842',
          500: '#e8b923',
          600: '#c9971a',
        },
        warm: {
          50: '#fdfaf7',
          100: '#f8f0e6',
          200: '#f0dfc8',
          900: '#3d2010',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
