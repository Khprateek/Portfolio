/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'background1' : '#00072D',
        'background2' : '#051650',
        'background3' : '#0A2472',
        'background4' : '#123499',
        'background5' : '#1A43BF',
        
        'text1' : 'white',
        'shadow1': 'rgba(0,0,0,0.3)'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

