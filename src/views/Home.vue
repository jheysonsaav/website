<template>
  <layout-default title="Home">
    <div class="about">
      <div class="about__left">
        <img
          src="../assets/images/logo.png"
          alt="Jheyson Saavedra"
          width="3456"
          height="5184"
        />
      </div>
      <div class="about__right">
        <div class="about__title">
          <span>Hello, I'm</span>
          <h1>Jheyson Saavedra</h1>
        </div>
        <div class="about__description">
          <p>
            I am a software developer with a passion for open source. I like
            working with Rust, Typescript, and Deno. if you want to see my best
            projects and those that I am currently working on, look
            <a href="/projects" class="link">here</a>
          </p>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "../layouts/Default.vue";

export default defineComponent({
  name: "Home",
  components: {
    LayoutDefault,
  },
});
</script>

<style lang="scss" scoped>
@import "~@/scss/_breakpoints.scss";

.about {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 2rem 1rem;
  flex-direction: column;
  @include breakpoints(md) {
    padding: 2rem 4rem;
  }
  @include breakpoints(lg) {
    padding: 2rem 10rem;
    flex-direction: row;
  }

  .about__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include breakpoints(lg) {
      width: 50%;
    }
    img {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      user-select: none;
    }
  }
  .about__right {
    margin-top: 2rem;
    @include breakpoints(lg) {
      margin-top: 0;
      width: 50%;
    }
    .about__title {
      span {
        font-size: 1.4rem;
      }

      h1 {
        padding: 0;
        margin: 0;
        margin-top: 0.4rem;
        font-size: 2.2rem;
        @include breakpoints(md) {
          font-size: 2.6rem;
        }
      }
    }

    .about__description {
      max-width: 40rem;
      line-height: 1.6;
    }
  }
}
</style>
