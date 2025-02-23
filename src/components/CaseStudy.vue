<template>
  <div class="work">
    <div class="work__left" ref="left">
      <img :src="caseStudy.src" :alt="caseStudy.name" />
    </div>

    <div class="work__right" ref="right">
      <div>
        <TitleTag
          :title="caseStudy.titleTag"
          :color="caseStudy.titleTagColor"
          lineSize="small"
        />
        <h3 class="work__name">{{ caseStudy.name }}</h3>
        <p class="work__work-title">{{ caseStudy.workInfo }}</p>
        <p class="work__description">
          {{ caseStudy.description }}
        </p>
        <p class="work__intro" v-if="caseStudy.intro">
          {{ caseStudy.intro }}
        </p>
        <p @click="handleRouteChange(caseStudy)" class="work__action">
          Read Case study
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";
import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
  name: "CaseStudy",
  props: {
    caseStudy: Object,
  },
  components: {
    TitleTag,
  },
  setup() {
    const { observeElement } = useIntersectionObserver();

    return {
      observeElement,
    };
  },
  mounted() {
    this.observeElement(this.$refs.left, "left");
    this.observeElement(this.$refs.right, "right");
  },
  methods: {
    handleRouteChange(caseStudy) {
      this.$router.push({
        name: caseStudy.route,
        // FEATURE: might use this later (to avoid using a state manager)
        // query: {
        //   caseStudy: JSON.stringify({
        //     workInfo: caseStudy.workInfo,
        //     name: caseStudy.name,
        //     description: caseStudy.description,
        //   }),
        // },
      });
    },
  },
};
</script>
