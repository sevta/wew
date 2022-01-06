const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        amatic: ["Amatic SC"],
        josefin: ["Josefin Sans"],
        greatvibes: ["Great Vibes"],
        relaway: ["Raleway"],
      },
      screens: {
        xxl: { max: "1535px" },
        xl: { max: "1366px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "450px" },
        xxs: { max: "320px" },
      },
    },
  },
  plugins: [require("daisyui")],
};
