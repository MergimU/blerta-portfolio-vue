<template>
  <div class="parallax__container">
    <div class="parallax" @mousemove="handleMouseMove">
      <svg
        class="parallax__background"
        preserveAspectRatio="none"
        viewBox="0 0 930 1135"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            x1="42.8559188%"
            y1="65.2271994%"
            x2="96.5473217%"
            y2="-2.00472708%"
            id="linearGradient-1"
          >
            <stop stop-color="#E3F4F1" offset="0%"></stop>
            <stop stop-color="#D3EAF6" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g
          id="asset-background"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <rect
            id="Rectangle"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="930"
            height="1135"
          ></rect>
          <path
            d="M992,497 C843.806986,524.785845 751.150545,615.522952 714.030675,769.211321 C658.350871,999.743876 555.6841,1153.14472 369.770514,1166.38157 C245.828124,1175.20614 453.237952,1175.20614 992,1166.38157 L992,497 Z"
            id="Path-11"
            fill-opacity="0.3"
            fill="#FFFFFF"
          ></path>
          <path
            d="M684,0 C458.384681,2.54742735 335.446297,79.4165782 315.184847,230.607453 C294.923397,381.798327 189.861781,446.574613 0,424.93631 L0,0 L684,0 Z"
            id="Path-10"
            fill-opacity="0.3"
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>

      <ParallaxImage
        v-for="(image, idx) in images"
        :key="idx"
        :image="image"
        :coords="coords"
      />
    </div>
  </div>
</template>

<script>
import ParallaxImage from "./ParallaxImage.vue";

export default {
  name: "Parallax",
  components: {
    ParallaxImage,
  },
  data() {
    return {
      images: [
        {
          name: "coffee",
          src: require("@/assets/images/animation/coffee.png"),
          dataSpeed: 0.05,
        },
        {
          name: "chips",
          src: require("@/assets/images/animation/chips.png"),
          dataSpeed: 0.04,
        },
        {
          name: "chips-bag",
          src: require("@/assets/images/animation/chips-bag.png"),
          dataSpeed: 0.035,
        },
        {
          name: "one-paper",
          src: require("@/assets/images/animation/one-paper.png"),
          dataSpeed: 0.02,
        },
        {
          name: "notebook",
          src: require("@/assets/images/animation/notebook.png"),
          dataSpeed: 0.03,
          dataRevert: true,
        },
        {
          name: "blerta",
          src: require("@/assets/images/animation/beta.png"),
          dataSpeed: 0.03,
        },
      ],

      coords: { x: 0, y: 0 },
    };
  },
  methods: {
    handleMouseMove(e) {
      const wx = window.innerWidth;
      const wy = window.innerHeight;

      const x = e.pageX - e.currentTarget.offsetLeft;
      const y = e.pageY - e.currentTarget.offsetTop;

      this.coords.x = x - wx / 2;
      this.coords.y = y - wy / 2;
    },
  },
};
</script>
