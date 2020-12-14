import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "%s - JheysonDev",
    title: "Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "author", content: "Jheyson Saavedra" },
      { name: "robots", content: "index, follow" },
      { name: "copyright", content: "Jheyson Saavedra" },
      { name: "theme-color", content: "#5294e2" },
      { name: "color-scheme", content: "dark" },
      { properity: "og:site_name", content: "JheysonDev Website" },
      { properity: "og:type", content: "website" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#5294e2",
          accent: "#404552",
          back_light: "#383c4a",
          back_dark: "#2d323d",
          font_color: "#b1b8c1",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: "#383c4a",
        },
      },
      icons: {
        iconfont: "fa",
      },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
  },
};
