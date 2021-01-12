const colors = require('tailwindcss/colors'); // eslint-disable-line
const defaultTheme = require('tailwindcss/defaultTheme'); // eslint-disable-line

module.exports = {
  purge: ['./pages/**/*.{ts,js,tsx,jsx}', './src/components/**/*.{ts,js,tsx,jsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.rose,
      primary: colors.blue,
      secondary: colors.rose,
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: [
        'Roboto Slab',
        'Cambria',
        'Cochin',
        'Georgia',
        'Times',
        'Times New Roman',
        'serif',
      ],
      mono: [
        'JetBrains Mono',
        'Cascadia Code PL',
        'Roboto Mono',
        'Source Code Pro',
        'Ubuntu Mono',
        'Courier New',
        'Courier',
        'monospace',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
