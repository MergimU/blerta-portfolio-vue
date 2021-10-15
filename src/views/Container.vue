<template>
  <div class="container">
    <Header />

    <Parallax />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Parallax from "@/views/Parallax/Parallax.vue";
export default {
  name: "Container",
  components: {
    Header,
    Parallax,
  },
};
</script>
