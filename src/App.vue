<template>
  <Container />
</template>

<script>
import Container from "@/views/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
