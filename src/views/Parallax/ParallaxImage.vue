<template>
  <div
    class="parallax"
    ref="img"
    :class="image.name"
    :speed="image.dataSpeed"
    :data-revert="image.dataRevert"
  >
    <img :src="image.src" />
  </div>
</template>

<script>
export default {
  name: "ParallaxImage",
  props: {
    image: Object,
    coords: Object,
  },
  watch: {
    coords: {
      handler() {
        let speed = this.$refs.img.getAttribute("speed");
        const revert = this.$refs.img.getAttribute("revert");
        if (revert) speed *= -1;

        let { x, y } = this.coords;

        const scale = (
          this.$refs.img.getBoundingClientRect().width /
          this.$refs.img.offsetWidth
        ).toFixed(2);

        console.log("x", x * speed);
        console.log("y", y * speed);

        this.$refs.img.style.transform = `scale(${scale}) translate3d(${
          1 - x * speed
        }px, ${1 - y * speed}px, 0px)`;
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
      const className = element.classList[1];

      const fn = {
        blerta() {
          element.style.top =
            "calc(" + blertapx + "px - " + scrolled / 3 + "px)";
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
