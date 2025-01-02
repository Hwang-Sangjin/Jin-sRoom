/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        up: {
          from: {
            visibility: "visible",
            transform: "translate3d(0, 80%, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
          },
        },
        down: {
          from: {
            transform: "translate3d(0, 0, 0)",
          },
          to: {
            visibility: "hidden",
            transform: "translate3d(0, 80%, 0)",
          },
        },
      },
      animation: {
        up: "up 1s ease-in-out",
        down: "down 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
