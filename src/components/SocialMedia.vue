<template>
  <div class="social__media" ref="socialMedia">
    <a :href="socialMedia.href" target="_blank">
      <img :src="socialMedia.src" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
  props: {
    socialMedia: Object,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getPosition);
  },
  unmounted() {
    window.removeEventListener("scroll", this.getPosition);
  },
  methods: {
    showSocialMedia() {
      setTimeout(() => {
        this.$el.classList.add("show");
      }, this.socialMedia.idx * 100);
    },

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
        this.showSocialMedia();

        window.removeEventListener("scroll", this.getPosition);
      }
    },
  },
};
</script>
