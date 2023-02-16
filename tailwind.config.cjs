/* eslint-disable */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      transitionProperty: {
        border: 'border',
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        '1/9': '11.111111%',
        '2/9': '22.222222%',
        '3/9': '33.333333%',
        '4/9': '44.444444%',
        '5/9': '55.555555%',
        '6/9': '66.666666%',
        '7/9': '77.777777%',
        '8/9': '88.888888%',
      },
      dropShadow: {
        reversed: ['0 -10px 15px rgba(0, 0, 0, 0.03)', '0 -4px 6px rgba(0, 0, 0, 0.08)'],
      },
      transitionDuration: {
        800: '800ms',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
  corePlugins: {
    // preflight: false,
  },
  important: true,
};
