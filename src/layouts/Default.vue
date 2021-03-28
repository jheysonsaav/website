<template>
  <Head>
    <title>
      {{ globalTitle }}
    </title>
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="description" :content="description" />
    <meta name="robots" content="index, follow" />

    <meta property="og:title" :content="globalTitle" />
    <meta property="og:site_name" content="Jheyson Saavedra" />
    <meta property="og:description" :content="description" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@jheysonsaav" />
    <meta name="twitter:creator" content="@jheysonsaav" />
  </Head>
  <Header />
  <main :class="'view-' + title.toLowerCase().replace(/ /g, '_')">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Head } from "@vueuse/head";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "LayoutDefault",
  setup(props) {
    const globalTitle =
      props.defaultTitle == false
        ? props.title
        : `${props.title} - Jheyson Saavedra`;

    return {
      globalTitle,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    defaultTitle: {
      type: Boolean,
      default: true,
    },
    description: String,
  },
  components: {
    Head,
    Header,
  },
});
</script>
