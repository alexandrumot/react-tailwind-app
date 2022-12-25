/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-main': '#161E31',
        'clr-accent': '#F9B17B',
        'clr-card': '#2D3250',
        'clr-input': '#424769',
        'clr-paragraph': '#686F9E'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 10px 0px rgba(249, 177, 123, 100)'
      },
      textDecorationColor: {
        'clr-accent': '#F9B17B'
      }
    }
    
  },
  plugins: [],
}
