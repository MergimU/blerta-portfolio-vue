<template>
  <div
    class="container"
    :style="`padding-bottom: ${getRoute === 'home' ? '320px' : 'none'}`"
  >
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
