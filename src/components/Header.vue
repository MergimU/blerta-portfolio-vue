<template>
  <ul class="header__nav">
    <li class="header__title" v-for="(link, idx) of links" :key="idx">
      <a
        class="header__link"
        :href="link.route"
        :class="{ 'text__orange text__bold': link.orange }"
      >
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          name: "Work",
          route: "#work",
        },
        {
          name: "Resume",
          route: "#resume",
        },
        {
          name: "About me",
          route: "#about",
        },
        {
          name: "Get in touch",
          route: "#contact",
          orange: true,
        },
      ],
    };
  },
};
</script>
