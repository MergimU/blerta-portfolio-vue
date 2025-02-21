<template>
  <div class="container">
    <Navigation />

    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Container",
  components: {
    Navigation,
  },
  computed: {
    getRoute() {
      return this.$route.name;
    },
  },
};
</script>
