const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      black: colors.gray,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      minWidth: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
