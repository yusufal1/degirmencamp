/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
      },
      colors: {
        primary: "#40A578",
        secondary: "#F0C52C"
      }
    },
    
  },
  plugins: [],
}

