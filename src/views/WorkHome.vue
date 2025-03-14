<template>
  <div class="work-home ref-work">
    <h1 id="work" class="work-home__title" ref="left">Work</h1>

    <div class="work-home__cases">
      <CaseStudy
        v-for="(study, index) in caseStudies"
        :key="index"
        :caseStudy="study"
      />
    </div>
  </div>
</template>

<script>
import CaseStudy from "@/components/CaseStudy.vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
  name: "WorkHome",
  components: {
    CaseStudy,
  },
  setup() {
    const { observeElement } = useIntersectionObserver();

    return {
      observeElement,
    };
  },
  mounted() {
    this.observeElement(this.$refs.left, "left");
  },
  data() {
    return {
      show: false,

      caseStudies: [
        {
          titleTag: "DESKTOP, TABLET & MOBILE",
          titleTagColor: "#66ABF7",
          buttonType: "btn btn--primary",
          workInfo: "Senior UX/UI · 2020 - Present",
          name: "BAMF Clinic and Radiopharmacy",
          description:
            "BAMF (Bold Advanced Medical Future) Clinic and Radiopharmacy are platforms tailored exclusively for the needs of doctors and technicians to build sensitive drugs, manage inventory, and treat patients. ",
          route: "bamf-clinic",
          src: require("@/assets/images/work-images/bamf-clinic.webp"),
        },
        {
          titleTag: "DESKTOP",
          titleTagColor: "#636CE5",
          buttonType: "btn btn--primary",
          workInfo: "Design Lead · 2021 - 2022",
          name: "Thrive - Core & Activity app",
          description:
            "Thrive is a community based, web3 platform for people to contribute and share skills with one another by exchanging the platform's signature coin — thrivecoin.",
          route: "thrive",
          src: require("@/assets/images/work-images/thrivecoin.webp"),
        },
        {
          titleTag: "DESKTOP & MOBILE",
          titleTagColor: "#63C6A0",
          buttonType: "btn btn--primary",
          workInfo: "Senior UX/UI · 2020 - Present",
          name: "BAMF Patient",
          description:
            "BAMF (Bold Advanced Medical Future) Patient is a platform for allowing patients with Metastasized Neuroendocrine or Prostate cancer to apply for a novel treatment in one of their clinics.",
          route: "bamf-patient",
          src: require("@/assets/images/work-images/bamf-patient.webp"),
        },

        {
          titleTag: "DESKTOP & MOBILE",
          titleTagColor: "#D79B70",
          buttonType: "btn btn--primary",
          workInfo: "UX/UI Designer and Illustrator · 2019 - 2020",
          name: "Uniseguros platform",
          description:
            "Uniseguros is a Panamanian service company that acts as a middle man for clients and insurance companies. Its main goal is to simplify the experience when applying, managing or making a claim or a quote. ",
          route: "uniseguros-platform",
          src: require("@/assets/images/work-images/uniseguros-platform.webp"),
        },
        {
          titleTag: "DESKTOP & MOBILE",
          titleTagColor: "#FFCF68",
          buttonType: "btn btn--primary",
          workInfo: "UX/UI Designer and Illustrator · 2019 - 2020",
          name: "Uniseguros website",
          description:
            "Uniseguros website is focused on a seamless quote creation experience while maintaining a similar design language to the platform. ",
          route: "uniseguros-website",
          src: require("@/assets/images/work-images/bamf-clinic.webp"),
        },

        {
          titleTag: "MOBILE",
          titleTagColor: "#92D739",
          buttonType: "btn btn--primary",
          workInfo: "UX/UI Designer and Illustrator · 2018",
          name: "Friendict",
          description:
            "Frendict is a mobile betting app for predicting soccer game results against friends and strangers using the platform's coin system.",
          route: "friendict",
          src: require("@/assets/images/work-images/friendict.webp"),
        },
        {
          titleTag: "DESKTOP & MOBILE",
          titleTagColor: "#FB8787",
          buttonType: "btn btn--primary",
          workInfo: "UX/UI Designer - 2018",
          name: "Express",
          description:
            "Express was a redesign project for one of the largest digital medias in Kosovo.",
          route: "express",
          src: require("@/assets/images/work-images/express.webp"),
        },
        {
          titleTag: "DESKTOP & MOBILE",
          titleTagColor: "#E6936F",
          buttonType: "btn btn--primary",
          workInfo: "UX/UI Designer and Illustrator · 2017",
          name: "Balkan Cuisine",
          description:
            "Balkan Cuisine is a curation of Balkan's finest dishes. It was an early personal, side project that's close to my heart ❤️.",
          route: "balkan-cuisine",
          src: require("@/assets/images/work-images/balkan-cousine.webp"),
        },
      ],
    };
  },
};
</script>
