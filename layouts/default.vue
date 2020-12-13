<template>
  <v-app dark class="red">
    <Navigation />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>
