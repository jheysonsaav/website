module.exports = {
  purge: ["./pages/**/*.{ts,js,tsx,jsx}", "./components/**/*.{ts,js,tsx,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
