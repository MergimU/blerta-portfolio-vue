<template>
  <div class="footer ref-contact" id="contact">
    <div class="footer__message">
      <h1>Get in touch</h1>
    </div>

    <div class="social__medias-all">
      <SocialMedia
        v-for="(social, idx) in socialMedias"
        :key="idx"
        :socialMedia="{ ...social, idx }"
      />
    </div>

    <div class="footer__drawing">
      <img
        class="footer__drawing-laptop"
        :src="require('@/assets/images/footer/write-me.png')"
      />
      <img
        class="footer__drawing-papers"
        :src="require('@/assets/images/footer/papers.png')"
      />
    </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/SocialMedia.vue";

export default {
  name: "Footer",
  components: {
    SocialMedia,
  },
  data() {
    return {
      socialMedias: [
        {
          src: require("@/assets/images/social-medias/Telegram.png"),
          href: "mailto:beselicablerta@gmail.com",
        },
        {
          src: require("@/assets/images/social-medias/Twitter.png"),
          href: "https://twitter.com/blertabeselica",
        },
        {
          src: require("@/assets/images/social-medias/Instagram.png"),
          href: "https://www.instagram.com/blertabeselica/",
        },
        {
          src: require("@/assets/images/social-medias/Dribbble.png"),
          href: "https://dribbble.com/blertabeselica?page=3",
        },
        {
          src: require("@/assets/images/social-medias/Behance.png"),
          href: "https://www.behance.net/beselica",
        },
        {
          src: require("@/assets/images/social-medias/Linkedin.png"),
          href: "https://www.linkedin.com/in/blertabeselica",
        },
      ],
    };
  },
};
</script>
