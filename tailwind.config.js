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
      container: {
        // you can configure the container to be centered
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        staticGreen: "#1AD993",
        staticAquamarine: "#ABFFE0",
        staticBlue: "#503AE7",
        staticPurple: "#832BC1",
        staticBlack: "#14142B",
        staticGray: "#AFB0B9",
        staticOffWhite: "#F4F2FF",
      },
    },
  },
  plugins: [],
};
