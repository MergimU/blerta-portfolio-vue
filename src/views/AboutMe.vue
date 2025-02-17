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
export default {
  name: "AboutMe",
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.setupObserver();
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
    setupObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.handleIntersection(entry.target);
          }
        });
      }, options);

      this.observer.observe(this.$refs.left);
      this.observer.observe(this.$refs.right);
    },
    handleIntersection(target) {
      if (target === this.$refs.left) {
        this.$refs.left.classList.add("show");
      } else if (target === this.$refs.right) {
        setTimeout(() => {
          this.$refs.right.classList.add("show");
        }, 100);
      }

      this.observer.unobserve(target);
    },
  },
};
</script>
