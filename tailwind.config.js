/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        alarge: "alarge 2s forwards",
        alarge_reverse: "alarge 1s reverse forwards",
        button_fade: "button_fade 1s forwards",
      },
      keyframes: {
        alarge: {
          "from": { width: "430px" },
          "to": { width: "600px" },
        },
        button_fade: {
          "from": { opacity: 0 },
          "to": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

