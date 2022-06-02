<template>
  <div class="case__study">
    <div class="case__study-left" ref="left">
      <img :src="caseStudy.src" alt="" />
    </div>

    <div
      class="case__study-right"
      :style="{ paddingTop: caseStudy.id === 1 ? '40px' : '22px' }"
      ref="right"
    >
      <div>
        <h3 class="case__study-name">{{ caseStudy.name }}</h3>
        <p class="case__study-description">{{ caseStudy.description }}</p>
        <p class="case__study-intro" v-if="caseStudy.intro">
          {{ caseStudy.intro }}
        </p>
        <p class="case__study-action">Read Case study</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseStudy",
  props: {
    caseStudy: Object,
  },
  mounted() {
    window.addEventListener("scroll", this.getPosition);
  },
  methods: {
    isElementInViewport() {
      return new Promise((resolve) => {
        const o = new IntersectionObserver(([entry]) => {
          resolve(entry.intersectionRatio === 1);
          o.disconnect();
        });
        o.observe(this.$el);
      });
    },
    async getPosition() {
      const bool = await this.isElementInViewport();
      if (bool) {
        this.$emit("showWork");

        this.$refs.left.classList.add("show");
        setTimeout(() => {
          this.$refs.right.classList.add("show");
        }, 100);

        window.removeEventListener("scroll", this.getPosition);
      }
    },
  },
};
</script>
