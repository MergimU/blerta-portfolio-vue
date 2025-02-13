<template>
  <div class="case__study">
    <div class="case__study-left" ref="left">
      <img :src="caseStudy.src" :alt="caseStudy.name" />
    </div>

    <div
      class="case__study-right"
      :style="{ paddingTop: caseStudy.id === 1 ? '40px' : '22px' }"
      ref="right"
    >
      <div>
        <TitleTag
          :title="caseStudy.titleTag"
          :color="caseStudy.titleTagColor"
          lineSize="small"
        />
        <h3 class="case__study-name">{{ caseStudy.name }}</h3>
        <p class="case__study__work-title">{{ caseStudy.workInfo }}</p>
        <p class="case__study-description">{{ caseStudy.description }}</p>
        <p class="case__study-intro" v-if="caseStudy.intro">
          {{ caseStudy.intro }}
        </p>
        <p @click="handleRouteChange(caseStudy)" class="case__study-action">
          Read Case study
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import TitleTag from "@/components/ui/TitleTag.vue";

export default {
  name: "CaseStudy",
  props: {
    caseStudy: Object,
  },
  components: {
    TitleTag,
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.setupObserver();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleRouteChange(caseStudy) {
      this.$router.push({ name: caseStudy.route, params: { caseStudy } });
    },
    setupObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.handleIntersection(entry.target);
          }
        });
      }, options);

      this.observer.observe(this.$refs.left);
      this.observer.observe(this.$refs.right);
    },
    handleIntersection(target) {
      if (target === this.$refs.left) {
        this.$refs.left.classList.add("show");
        this.$emit("showWork");
      } else if (target === this.$refs.right) {
        setTimeout(() => {
          this.$refs.right.classList.add("show");
        }, 100);
      }

      this.observer.unobserve(target);
    },
  },
};
</script>
