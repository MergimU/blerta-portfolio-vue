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
          name: "BAMF Patient and Clinic Portal",
          description: "Design lead",
          intro:
            "Hi guys and welcome to my youtube channel, today we'll be talking about BAMF and its benefits",
          route: "",
          src: require("@/assets/images/work/BAMF.png"),
        },
        {
          name: "Uniseguros platform",
          description: "UX / UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
          src: require("@/assets/images/work/UnisegurosPlatform.png"),
        },
        {
          name: "Uniseguros website",
          description: "UX / UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
          src: require("@/assets/images/work/UnisegurosWebsite.png"),
        },
        {
          name: "Balkan Cuisine",
          description: "UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          name: "Friendict",
          description: "UI Design and Illustrations",
          intro:
            "A mobile app for predicting soccer game results against friends and strangers using the platform's coin system.",
          route: "",
          src: require("@/assets/images/work/Friendict.png"),
        },
      ],
    };
  },
};
</script>
