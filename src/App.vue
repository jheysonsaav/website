<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@import "~@/scss/_fonts.scss", "~@/scss/_normalize.scss",
  "~@/scss/_variables.scss";

#app {
  font-family: "Inter", "Roboto", sans-serif;
  color: $color-bluegray-800;
}

@supports (font-variation-settings: normal) {
  #app {
    font-family: "Inter var", "Roboto", sans-serif;
  }
}

*::selection {
  color: $color-coolgray-50;
  background-color: $color-blue-500;
}

div,
main,
header,
section,
body,
html {
  scrollbar-width: auto;
  scrollbar-color: $color-bluegray-300 $color-coolgray-100;
}

.link {
  text-decoration: none;
  color: $color-blue-500;

  &:hover {
    color: $color-blue-400;
    transition: color 0.3s ease-in-out;
  }
}
</style>
