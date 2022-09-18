/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#252422",
        gold: "#CEB392",
        "off-white": "#f6f6f6",
      },
      fontFamily: {
        "northstar-regular": ["NorthstarRegular", "sans-serif"],
        "northstar-italic": ["NorthstarExpandedItalic", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
