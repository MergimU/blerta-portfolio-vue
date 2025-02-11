<template>
  <div class="container__inner">
    <div class="intro__section">
      <Intro />
      <Parallax />
    </div>

    <Work />
    <Footer />
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Parallax from "./Parallax/Parallax.vue";
import Work from "./Work.vue";
import Footer from "./Footer.vue";

export default {
  name: "InnerContainer",
  components: {
    Intro,
    Parallax,
    Work,
    Footer,
  },
};
</script>
