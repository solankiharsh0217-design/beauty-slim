/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CDA45E",
        "primary-dark": "#b8956a",
        secondary: "#1a252f",
        accent: "#e8d5c4",
        light: "#faf8f6",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
