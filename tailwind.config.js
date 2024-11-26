/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#c89f94",
      },
      keyframes: {
        sliceDown: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        sliceDown: "sliceDown 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
