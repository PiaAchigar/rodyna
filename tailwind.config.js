/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9dc761",
        "main-dark": "#1d2343",
        "light-bg":  "#cacacc",
        "secondary-gray": "#77767a",
        "accent-gray": "#3e3f3e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
