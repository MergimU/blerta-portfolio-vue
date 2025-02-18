<template>
  <div class="about-me ref-about" id="about">
    <div class="about-me__left" ref="left">
      <h2 class="about-me__title">About me</h2>
      <p class="about-me__description">
        I'm a Senior UX/UI Designer with more than 8 years of experience
        designing digital products in various industries like health, insurance,
        crypto and more. My background is in Brand Design and Illustrations. I'm
        passionate about creating aesthetic, easy-to-use digital products.
        <br />
        <br />
        In my design approach I tend to include research, wireframing,
        prototypes and high-fidelity designs while collaborating with engineers
        to deliver high quality software.
      </p>
    </div>
    <div class="about-me__right" ref="right">
      <img
        class="about-me__image"
        :src="require('@/assets/images/animation/beta.png')"
      />
    </div>
  </div>
</template>

<script>
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
  name: "AboutMe",
  data() {
    return {
      observer: null,
    };
  },

  setup() {
    const { observeElement } = useIntersectionObserver();

    return {
      observeElement,
    };
  },
  mounted() {
    this.observeElement(this.$refs.left, "left");
    this.observeElement(this.$refs.right, "right");
  },

  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleRouteChange(caseStudy) {
      this.$router.push({ name: caseStudy.route, params: { caseStudy } });
    },
  },
};
</script>
