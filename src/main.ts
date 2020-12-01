import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

App.use(VueGtag, {
  config: { id: "G-ZXJBVFVGEZ" }
});

createApp(App)
  .use(router)
  .mount("#app");
