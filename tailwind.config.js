/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        "intro-page-height": "calc(100vh - 5rem)",
      },
      colors: {
        primary: "#0A67C7",
      },
    },
  },
  plugins: [],
};
