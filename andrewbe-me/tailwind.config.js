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
        'worksans': ['Work Sans', 'sans-serif']

      },
      fontSize: {
        'xxs': ['10px', '18px']
      },
      colors: {
        'primary': '#F17C3A',
        'secondary': '#5A3FD9',
        'brand-slate': '#373F51',
        'brand-grey': '#E0E1DD',
      }
    },
  },
  plugins: [],
}
