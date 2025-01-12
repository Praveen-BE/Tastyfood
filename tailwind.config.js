/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
    extend: { roboto: ["Roboto", "sans-serif"] },
    // gridTemplateRows: {
    //   // Simple 16 row grid
    //   16: "repeat(16, minmax(0, 1fr))",

    //   // Complex site-specific row configuration
    //   layout: "200px minmax(900px, 1fr) 100px",
    // },
  },
  plugins: [],
};
