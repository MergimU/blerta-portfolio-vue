<template>
  <div class="work-list">
    <div class="work-list__title mb-2">
      <h6>{{ title }}</h6>
    </div>
    <div class="work-list__items">
      <ul>
        <li class="mb-1" v-for="(item, index) of list" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkList",
  props: ["title", "list"],
};
</script>
