<template>
  <div class="case-study">
    <TitleTag title="UX / UI Designer and Illustrator" lineSize="small" />
    <div class="case-study__title">
      <h1>Balkan Cuisine</h1>
    </div>

    <div class="case-study__large-image mb-80">
      <img :src="imageDummy" alt="" />
    </div>

    <div class="case-study__description mb-80">
      <p>
        Balkan Cuisine was a personal project early on in my design career that
        I did for testing out my skills in digital illustration combined with
        web design, but mostly for scratching that creative itch. Enjoy! 🍻
      </p>
    </div>

    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>
    <div class="case-study__large-image mt-5 mb-3">
      <figure>
        <img :src="imageDummy" />
        <figcaption class="mt-2">Section from the user flow</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";

export default {
  name: "BalkanCousine",
  components: {
    TitleTag,
  },
  data() {
    return {
      imageDummy: require("@/assets/images/thrive/thrive-1.png"),
    };
  },
};
</script>
