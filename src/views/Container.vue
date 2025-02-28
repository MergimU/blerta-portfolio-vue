<template>
  <div class="container">
    <Navigation />

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
