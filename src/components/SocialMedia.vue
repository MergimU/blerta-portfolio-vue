<template>
  <a
    class="social-media-link"
    :href="socialMedia.href"
    target="_blank"
    ref="socialMedia"
  >
    <img :src="socialMedia.src" :alt="socialMedia.label" />
  </a>
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
