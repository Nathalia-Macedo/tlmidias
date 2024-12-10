/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFD1',
        secondary: '#00C8DB',
        background: '#001a1a',
      },
    },
  },
  plugins: [],
}

