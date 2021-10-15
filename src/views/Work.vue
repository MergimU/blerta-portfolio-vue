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
          name: "Uniseguros platform",
          description: "UX / UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
        },
        {
          name: "Uniseguros website",
          description: "UX / UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
        },
        {
          name: "Balkan Cuisine",
          description: "UI Design and Illustrations",
          intro:
            "A complex platform that simplified the process of users when applying and managing their insurance.",
          route: "",
        },
      ],
    };
  },
};
</script>
