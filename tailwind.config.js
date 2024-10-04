/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#F8D8B8",
        "bg-dark": "#004832",
        "grey-light": "#EBEBEB",
        "accent-main": "#FFD012",
      },
    },
  },
  plugins: [],
};
