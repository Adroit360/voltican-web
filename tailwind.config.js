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
        warn: "#FF9900",
        "primary-dark": "#003469",
        "footer-bg": "#00172F",
        "text-black": "#010101",
        "text-gray": "#6F6D71",
        "border-gray": "#CDCBCF",
      },
    },
  },
  plugins: [],
};
