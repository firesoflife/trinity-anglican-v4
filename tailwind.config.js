/** @type {import('tailwindcss').Config} */
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
        accent: '#577FA9',
        accentHover: '#3B5771',
      },
    },
  },
  plugins: [require('daisyui')],
};
