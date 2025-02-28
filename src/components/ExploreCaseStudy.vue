<template>
  <div class="explore-case-study">
    <div class="case-study">
      <h2 class="case-study__subtitle mb-3">
        Want to see more about my exploration phase? Check out this project
      </h2>
      <div class="explore-case-study__body">
        <div class="work-home__cases">
          <CaseStudy :caseStudy="visitCaseStudy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CaseStudy from "@/components/CaseStudy.vue";

export default {
  name: "ExploreCaseStudy",
  components: {
    CaseStudy,
  },
  data() {
    return {
      caseStudy: null,
      visitCaseStudy: {
        titleTag: "DESKTOP",
        titleTagColor: "#636CE5",
        buttonType: "btn btn--secondary",
        workInfo: "Design Lead · 2021 - 2022",
        name: "Thrive - Core & Activity app",
        description:
          "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
        route: "thrive",
        src: require("@/assets/images/work-images/thrivecoin.webp"),
      },
    };
  },
};
</script>
