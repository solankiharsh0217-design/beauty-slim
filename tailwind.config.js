/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CDA45E",
          dark: "#b8956a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1a252f",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#e8d5c4",
          foreground: "#1a252f",
        },
        light: "#faf8f6",
        background: "#faf8f6",
        foreground: "#1a252f",
        muted: {
          DEFAULT: "#f5f0eb",
          foreground: "#6b7280",
        },
        border: "#e5e0da",
        input: "#e5e0da",
        ring: "#CDA45E",
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a252f",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1a252f",
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
