/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
      "3xl": "1760px",
    },
    extend: {
      animation: {
        alarge: "alarge 2s forwards",
        alarge_2xl: "alarge_2xl 2s forwards",
        alarge_reverse: "alarge 1s reverse forwards",
        button_fade: "button_fade 1.2s forwards",
      },
      keyframes: {
        alarge: {
          "from": { width: "430px" },
          "to": { width: "600px" },
        },
        alarge_2xl: {
          "from": { width: "370px" },
          "to": { width: "500px" },
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

