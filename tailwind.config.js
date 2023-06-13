/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5F2533',
        redHover: '#982F2F',
        primaryAccent1: '#CA5A33',
        PrimaryAccent2: '#D5845C',
        secondary: '#F2E9E4',
        accent: '#3B5771',
        accentHover: '#577FA9',
      },
      fontFamily: {
        heading: ['var(--font-header)', ...fontFamily.serif], // weight 400
        subheading: ['var(--font-header2)', ...fontFamily.serif], // weight 700
        mainContent: ['var(--font-main-content)', ...fontFamily.sans], // weight 400
        mainContent2: ['var(--font-main-content2)', ...fontFamily.sans], // weight 700
        subContent: ['var(--font-sub-content)', ...fontFamily.sans], // weight 400
        subContent2: ['var(--font-sub-content2)', ...fontFamily.sans], // weight 700
      },
    },
  },
  plugins: [require('daisyui')],
};
