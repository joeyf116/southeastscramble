/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ses: { 950: "#03ff38" },
      },
      fontFamily: {
        karantina: ["Karantina", "sans-serif"],
        contrail: ["Contrail One", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
