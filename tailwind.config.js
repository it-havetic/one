/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'custom-light': 'rgb(208, 223, 255)', // Custom light color
      },
      lineHeight: {
        '31.2': '31.2px', // Custom line height
      },
    },
  },
  plugins: [],
}