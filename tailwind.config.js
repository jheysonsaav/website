const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      white: colors.white,
      black: colors.gray,
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
