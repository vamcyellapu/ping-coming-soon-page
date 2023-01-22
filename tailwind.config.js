/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(223, 87%, 63%)",
        secondary: "hsl(223, 100%, 88%)",
        error: "hsl(354, 100%, 66%)",
        body: "hsl(0, 0%, 59%)",
        heading: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
