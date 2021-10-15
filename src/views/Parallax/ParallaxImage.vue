<template>
  <div
    ref="img"
    :class="image.name"
    :data-speed="image.dataSpeed"
    :data-revert="image.dataRevert"
  >
    <img :src="image.src" />
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ParallaxImage",
  props: {
    image: Object,
    coords: Object,
  },
  watch: {
    coords: {
      handler() {
        let speed = Number(this.$refs.img.getAttribute("data-speed"));
        const revert = this.$refs.img.getAttribute("data-revert");

        if (revert) speed *= -1;

        let { x, y } = this.coords;

        gsap.to(this.$refs.img, {
          x: 1 - x * speed,
          y: 1 - y * speed,
          duration: 1,
        });
      },
      deep: true,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.parallax);
  },
  unmounted() {
    window.removeEventListener("scroll", this.parallax);
  },
  methods: {
    parallax() {
      this.parallaxScroll(-160, 80, 200, 500, 350, 320);
    },

    parallaxScroll(blertapx, chipspx, chipsBagpx, bookpx, paperpx, coffeepx) {
      const scrolled = window.pageYOffset;
      const element = this.$refs.img;
      const className = element.classList[0];

      const fn = {
        blerta() {
          element.style.top =
            "calc(" + blertapx + "px - " + scrolled / 2 + "px)";
        },
        notebook() {
          element.style.top =
            "calc(" + bookpx + "px - " + scrolled / 1.5 + "px)";
        },
        "one-paper"() {
          element.style.top =
            "calc(" + paperpx + "px - " + scrolled / 2 + "px)";
        },
        "chips-bag"() {
          element.style.top =
            "calc(" + chipsBagpx + "px - " + scrolled / 2.5 + "px)";
        },
        chips() {
          element.style.top =
            "calc(" + chipspx + "px - " + scrolled / 2 + "px)";
        },
        coffee() {
          element.style.top =
            "calc(" + coffeepx + "px - " + scrolled / 1.5 + "px)";
        },
      };

      fn[className]();
    },
  },
};
</script>
