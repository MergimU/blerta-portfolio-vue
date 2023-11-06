<template>
  <div class="container" :style="`padding-bottom: ${getRoute === 'home' ? '320px' : 'none'}`">
    <Header />

    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Container",
  components: {
    Header,
  },
  computed: {
    getRoute() {
      return this.$route.name
    }
  }
};
</script>
