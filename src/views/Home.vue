<template>
  <div class="home">
    <Intro />
    <WorkHome />
    <AboutMe />
    <Footer />
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Footer from "./Footer.vue";
import AboutMe from "./AboutMe.vue";
import WorkHome from "./WorkHome.vue";

export default {
  name: "Home",
  components: {
    Intro,
    WorkHome,
    AboutMe,
    Footer,
  },
};
</script>
