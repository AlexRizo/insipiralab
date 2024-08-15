/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      animation: {
        alarge: "alarge 2s forwards",
        alarge_reverse: "alarge 2s reverse forwards",
      },
      keyframes: {
        alarge: {
          "from": { width: "25%" },
          "to": { width: "45%" },
        },
      },
    },
  },
  plugins: [],
}

