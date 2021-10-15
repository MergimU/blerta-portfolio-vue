<template>
  <div class="container">
    <Header />

    <div class="inner__container">
      <div>
        <Intro />
        <Parallax />
      </div>

      <Work />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "./Intro.vue";
import Parallax from "./Parallax/Parallax.vue";
import Work from "./Work.vue";
export default {
  name: "Container",
  components: {
    Header,
    Intro,
    Parallax,
    Work,
  },
};
</script>
