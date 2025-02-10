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
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Thrive - Core & Activity app",
          id: 1,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "thrive",
          src: require("@/assets/images/work/Thrive.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "BAMF Clinic Portal",
          id: 2,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "bamf-clinic",
          src: require("@/assets/images/work_new/bamf.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "BAMF Patient Portal",
          id: 3,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "bamf-patient",
          src: require("@/assets/images/work/BAMF.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Uniseguros platform",
          id: 4,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "uniseguros-platform",
          src: require("@/assets/images/work/UnisegurosPlatform.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Uniseguros website",
          id: 5,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "uniseguros-website",
          src: require("@/assets/images/work/UnisegurosWebsite.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Balkan Cuisine",
          id: 6,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "balkan-cuisine",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Express",
          id: 7,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "express",
          src: require("@/assets/images/work/BalkanCuisine.png"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#66ABF7",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Friendict",
          id: 8,
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "friendict",
          src: require("@/assets/images/work/Friendict.png"),
        },
      ],
    };
  },
};
</script>
