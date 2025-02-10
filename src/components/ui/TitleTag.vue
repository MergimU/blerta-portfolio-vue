<template>
  <div class="c-title-tag">
    <p :style="{ color: color ? color : '#918fa8' }">{{ title }}</p>
    <div
      :style="{ backgroundColor: color ? color : '#918fa8' }"
      :class="['c-title-tag__line', lineSize ? lineSize : 'large']"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TitleTag",
  props: {
    title: String,
    color: String,
    lineSize: String,
  },
};
</script>
