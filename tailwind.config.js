/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  "darkMode": "class",
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1200px",

      "2xl": "1636px",
    },
    extend: {
      colors: {
        orange: "#FF6500",
        orange2: "#E65C19",
      },
      fontFamily: {
        title: ["Manrope", "sans-serif"],
        text: ["Roboto", "sans-serif"],
        text2: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
