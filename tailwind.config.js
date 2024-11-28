/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          200: "#c89f94",
          400: "#A25F4B",
        },
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
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        sliceDown: "sliceDown 0.4s ease-in-out",
        fadeIn: "fadeIn 0.4s ease-in-out",
      },
      backgroundImage: {
        "slider-bg":
          "url(https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg)",
      },
    },
  },
  plugins: [],
};
