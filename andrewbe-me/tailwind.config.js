/** @type {import('tailwindcss').Config} */
 // tailwind.config.js
 const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ultra': ['Ultra', 'serif'],
        'slabo': ['"Slabo 13px"', 'serif'],
        'sans': ['slabo', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'xxs': ['10px', '18px']
      },
      colors: {
        'primary': '#125B50',
        'yellow': '#F8B400',
        'brand-white': '#FAF5E4',
        'brand-pink': '#FF6363',
      },
    },
  },
  plugins: [],
}
