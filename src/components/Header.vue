<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__items">
        <li class="header__item">
          <router-link to="/" title="Home">Home</router-link>
        </li>
        <li class="header__item">
          <router-link to="/" title="Projects">Projects</router-link>
        </li>
        <li class="header__item">
          <router-link to="/" title="Blog">Blog</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
@import "~@/scss/_variables.scss", "~@/scss/_breakpoints.scss";

.header {
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 2px 2px 40px 20px $color-bluegray-100;
  position: sticky;
  top: 0;
  user-select: none;
  padding: 0.8rem 2rem;
  background-color: #fcfcfc;
  @include breakpoints(lg) {
    padding: 1.2rem 2rem;
  }

  .header__items {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;

    .header__item {
      margin-right: 1rem;
      list-style: none;

      a {
        text-decoration: none;
        color: $color-bluegray-500;
        font-weight: 500;

        &:hover {
          color: $color-blue-500;
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>
