/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'"],
      },
      colors: {
        staticGreen: "#1AD993",
        staticAquamarine: "#ABFFE0",
        staticBlue: "#503AE7",
        staticPurple: "#832BC1",
        staticBlack: "#000",
        staticGray: "#AFB0B9",
        staticOffWhite: "#F4F2FF",
      },
    },
  },
  plugins: [],
};
