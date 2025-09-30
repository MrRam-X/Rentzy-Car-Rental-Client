/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "brand-gold": "#f5b754",
        "brand-dark": "#121212",
        "brand-gray": "#666666",
        "brand-card": "#f5f4f0",
      },
    },
  },
  plugins: [],
};
