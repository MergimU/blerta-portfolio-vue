<template>
  <div class="container__inner">
    <div class="intro__section">
      <Intro />
      <Parallax />
    </div>
    <Work />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Parallax from "./Parallax/Parallax.vue";
import Work from "./Work.vue";
import Footer from "./Footer.vue";
import AboutMe from "./AboutMe.vue";

export default {
  name: "InnerContainer",
  components: {
    Intro,
    Parallax,
    Work,
    AboutMe,
    Footer,
  },
};
</script>
