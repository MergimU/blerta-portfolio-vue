<template>
  <div class="intro">
    <div class="intro__description">
      <TitleTag title="Blerta Beselica" />
      <div class="description">
        <h1>
          Product Designer <br />
          & Illustrator
        </h1>

        <p>
          Or how my friends call me Blerta - and I'm a Senior Product Designer
          with a background in illustrations and branding.
        </p>
      </div>
    </div>
    <div>
      <Parallax />
    </div>
  </div>
</template>

<script>
import TitleTag from "../components/ui/TitleTag.vue";
import Parallax from "@/views/Parallax/Parallax.vue";
export default {
  name: "Intro",
  components: {
    TitleTag,
    Parallax,
  },
};
</script>
