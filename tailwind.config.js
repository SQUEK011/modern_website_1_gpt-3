/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#81AFDD",
        blog: "#042c54",
        subtext: "#FF8A71",
        footer: "#031B34",
        bg: "#040C18",
      },
      fontFamily: {
        manRope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: {'max': '480px'},
      ss: {'max': "620px"},
      sm: {'max': "768px"},
      md: {'max': "1060px"},
      lg: {'max': "1200px"},
      xl: {'max': "1700px"},
    },
  },
  plugins: [],
}

