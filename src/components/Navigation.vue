<template>
  <nav class="nav">
    <a
      v-for="(link, idx) of links"
      :key="idx"
      class="nav__link"
      @click="handleScrollToSection(link.route)"
      :class="{ 'text__orange text__bold': link.orange }"
    >
      {{ link.name }}
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          name: "Work",
          route: "work",
        },
        {
          name: "Resume",
          route: "resume",
        },
        {
          name: "About me",
          route: "about",
        },
        {
          name: "Get in touch",
          route: "contact",
          orange: true,
        },
      ],
    };
  },

  methods: {
    async handleScrollToSection(section) {
      if (this.$route.path !== "/") {
        await this.$router.push({ name: "home" });
      }

      const s = document.querySelector(`.ref-${section}`);
      if (s) {
        s.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
