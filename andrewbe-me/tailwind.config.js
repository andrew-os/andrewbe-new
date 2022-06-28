/** @type {import('tailwindcss').Config} */
 // tailwind.config.js

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
      },
      fontSize: {
        'xxs': ['10px', '18px']
      }
    },
  },
  plugins: [],
}
