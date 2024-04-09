/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "mona-sans": [
          "Mona Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        dribblePink: "rgb(235, 74, 138)",
        dribbleHeader: "rgb(37, 38, 49)",
        dribleGray: "rgb(184, 184, 190)",
      },
    },
  },
  plugins: [],
};
