<template>
  <div class="work ref-work">
    <transition name="fade">
      <div id="work" class="work__title" v-if="show">
        <h1>Work</h1>
      </div>
    </transition>

    <div class="case__studies-section">
      <CaseStudy
        v-for="study in caseStudies"
        :key="study.id"
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
          name: "ThriveCoin - Core & Activity app",
          id: 1,
          description: "Design lead",
          route: "thrivecoin",
          src: require("@/assets/images/work/ThriveCoin.png"),
        },
        {
          name: "BAMF Clinic Portal",
          id: 2,
          description: "Senior UX/UI",
          route: "bamf-clinic",
          src: require("@/assets/images/work/BAMF.png"),
        },
        {
          name: "BAMF Patient Portal",
          id: 3,
          description: "Senior UX/UI",
          route: "bamf-patient",
          src: require("@/assets/images/work/BAMF.png"),
        },
        {
          name: "Uniseguros platform",
          id: 4,
          description: "UX/UI Design and Illustrations",
          route: "uniseguros-platform",
          src: require("@/assets/images/work/UnisegurosPlatform.png"),
        },
        {
          name: "Uniseguros website",
          id: 5,
          description: "UX/UI Design and Illustrations",
          route: "uniseguros-website",
          src: require("@/assets/images/work/UnisegurosWebsite.png"),
        },
        {
          name: "Balkan Cuisine",
          id: 6,
          description: "UX/UI Designer and Illustrator",
          route: "balkan-cuisine",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          name: "Express",
          id: 7,
          description: "UX/UI Designer",
          route: "express",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          name: "Friendict",
          id: 8,
          description: "UX/UI Designer and Illustrator",
          route: "friendict",
          src: require("@/assets/images/work/Friendict.png"),
        },
      ],
    };
  },
};
</script>
