/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C4984A",
          dark: "#a87c34",
          foreground: "#0c0a08",
        },
        secondary: {
          DEFAULT: "#12100a",
          foreground: "#f0e8dc",
        },
        accent: {
          DEFAULT: "#322618",
          foreground: "#f0e8dc",
        },
        light: "#1a1410",
        background: "#0c0a08",
        foreground: "#f0e8dc",
        muted: {
          DEFAULT: "#1e1812",
          foreground: "#a09078",
        },
        border: "#2d2418",
        input: "#2d2418",
        ring: "#C4984A",
        destructive: {
          DEFAULT: "#c83c3c",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#16120e",
          foreground: "#f0e8dc",
        },
        popover: {
          DEFAULT: "#16120e",
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
