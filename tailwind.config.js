/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C4984A",
          dark: "#a87c34",
          foreground: "#0a0a0c",
        },
        secondary: {
          DEFAULT: "#0d0d10",
          foreground: "#f0e8dc",
        },
        accent: {
          DEFAULT: "#1e1c28",
          foreground: "#f0e8dc",
        },
        light: "#16161c",
        background: "#0a0a0c",
        foreground: "#f0e8dc",
        muted: {
          DEFAULT: "#16161c",
          foreground: "#969098",
        },
        border: "#232332",
        input: "#232332",
        ring: "#C4984A",
        destructive: {
          DEFAULT: "#c83c3c",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#101014",
          foreground: "#f0e8dc",
        },
        popover: {
          DEFAULT: "#101014",
          foreground: "#f0e8dc",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
