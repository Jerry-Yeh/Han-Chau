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
        bottom: 'bottom',
        top: 'top',
        height: 'height',
        'max-height': 'max-height',
      },
      transitionDuration: {
        400: '400ms',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        19.5: '4.875rem',
        21: '5.25rem',
        22: '5.5rem',
        27: '6.75rem',
        50: '12.5rem',
        77: '19.25rem',
        86: '21.5rem',
        89: '22.25rem',
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
      screens: {
        'mobile-xs': '321px',
        'mobile-sm': '375px',
        'mobile-md': '390px',
      },
      opacity: {
        65: '0.65',
      },
      borderRadius: {
        md: '5px',
        xm: '6px',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: ' translate(-20px, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0px, 0px)',
          },
        },
        fadeOut: {
          '0%': {
            opacity: 1,
            transform: ' translate(0px, 0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translate(-20px, 0px)',
          },
        },
      },
      animation: {
        fadeIn: '0.5s fadeIn backwards',
        fadeOut: '0.5s fadeOut backwards',
      },
      height: {
        screen: '100dvh',
      },
      minHeight: {
        screen: '100dvh',
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('search-cancel', '&::-webkit-search-cancel-button');
    }),
  ],
  corePlugins: {
    // preflight: false,
  },
  important: true,
  purge: false,
};
