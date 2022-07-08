/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    
    fontFamily:{
      signature:"'Tilt Prism'",
      body:"'Poppins', sans-serif",
      heading:'"Montserrat"',
      mono:"Menlo, monospace",
      display:"'Bebas Neue'",
      code:"'Fira Code'"
    }
  },
  plugins: [],
}

