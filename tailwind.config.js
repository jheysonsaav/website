const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{ts,js,tsx,jsx}", "./components/**/*.{ts,js,tsx,jsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontFamily: {
      sans: [
        "Lato",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      serif: [
        "Roboto Slab",
        "Cambria",
        "Cochin",
        "Georgia",
        "Times",
        "Times New Roman",
        "serif",
      ],
      mono: [
        "JetBrains Mono",
        "Cascadia Code PL",
        "Roboto Mono",
        "Source Code Pro",
        "Ubuntu Mono",
        "Courier New",
        "Courier",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
