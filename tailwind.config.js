
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefdf6",
          100: "#d6f6e6",
          200: "#b0e9cf",
          300: "#81d8b5",
          400: "#4ec69a",
          500: "#22b07f",   /* emerald-ish brand */
          600: "#159469",
          700: "#0f7454",
          800: "#0b5b45",
          900: "#084a39"
        },
        accent: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",   /* indigo accent */
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81"
        }
      },
      boxShadow: {
        'soft': '0 10px 25px -10px rgba(2,6,23,0.25)'
      }
    },
  },
  plugins: [],
}
