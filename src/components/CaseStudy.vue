<template>
  <div class="case-study-preview">
    <div class="case-study-preview__left" ref="left">
      <img :src="caseStudy.src" :alt="caseStudy.name" />
    </div>

    <div
      class="case-study-preview__right"
      :style="{ paddingTop: caseStudy.id === 1 ? '40px' : '22px' }"
      ref="right"
    >
      <div>
        <TitleTag
          :title="caseStudy.titleTag"
          :color="caseStudy.titleTagColor"
          lineSize="small"
        />
        <h3 class="case-study-preview__name">{{ caseStudy.name }}</h3>
        <p class="case-study-preview__work-title">{{ caseStudy.workInfo }}</p>
        <p class="case-study-preview__description">
          {{ caseStudy.description }}
        </p>
        <p class="case-study-preview__intro" v-if="caseStudy.intro">
          {{ caseStudy.intro }}
        </p>
        <p
          @click="handleRouteChange(caseStudy)"
          class="case-study-preview__action"
        >
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
      this.$router.push({ name: caseStudy.route, params: { caseStudy } });
    },
  },
};
</script>
