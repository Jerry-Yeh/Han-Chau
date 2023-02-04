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
    },
  },
  plugins: [require('tailwindcss-rtl')],
  corePlugins: {
    // preflight: false,
  },
  important: true,
};
