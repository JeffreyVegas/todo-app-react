/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      keyframes: {
        click: {
          "0%, 100%": { transform: "scale(0.95)" },
          "80%": { transform: "scale(0.95)" },
        },
      },
      animation: { click: "click 10000ms ease-in-out" },
    },
  },

  plugins: [],
};
