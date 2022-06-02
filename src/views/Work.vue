<template>
  <div class="work">
    <transition name="fade">
      <div id="work" class="work__title" v-if="show">
        <h1>Work</h1>
      </div>
    </transition>

    <div class="case__studies-section">
      <CaseStudy
        v-for="(study, idx) in caseStudies"
        :key="idx"
        :caseStudy="study"
        @showWork="show = true"
      />
    </div>
  </div>
</template>

<script>
import CaseStudy from "@/components/CaseStudy.vue";
export default {
  name: "Work",
  components: {
    CaseStudy,
  },
  data() {
    return {
      show: false,

      caseStudies: [
        {
          name: "ThriveCoin - Core app",
          id: 1,
          description: "Design lead",
          route: "",
          src: require("@/assets/images/work/ThriveCoin.png"),
        },
        {
          name: "BAMF Patient & Clinic Portal",
          id: 2,
          description: "Senior UX/UI",
          route: "",
          src: require("@/assets/images/work/BAMF.png"),
        },
        {
          name: "Uniseguros platform",
          id: 3,
          description: "UX/UI Design and Illustrations",
          route: "",
          src: require("@/assets/images/work/UnisegurosPlatform.png"),
        },
        {
          name: "Uniseguros website",
          id: 4,
          description: "UX/UI Design and Illustrations",
          route: "",
          src: require("@/assets/images/work/UnisegurosWebsite.png"),
        },
        {
          name: "Balkan Cuisine",
          id: 5,
          description: "UX/UI Designer and Illustrator",
          route: "",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          name: "Friendict",
          id: 6,
          description: "UX/UI Designer and Illustrator",
          route: "",
          src: require("@/assets/images/work/Friendict.png"),
        },
      ],
    };
  },
};
</script>
