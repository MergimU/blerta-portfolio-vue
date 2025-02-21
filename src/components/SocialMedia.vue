<template>
  <div class="social-media" ref="socialMedia">
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
      observer: null,
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.showSocialMedia();
          this.observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    this.observer.observe(this.$el);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    showSocialMedia() {
      setTimeout(() => {
        this.$el.classList.add("show");
      }, this.socialMedia.idx * 100);
    },
  },
};
</script>
