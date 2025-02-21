<template>
  <div class="list-app-feature mt-3 mb-3">
    <div
      class="list-app-feature__inner"
      v-for="(data, index1) of listAppFeature"
      :key="index1"
    >
      <div class="list-app-feature__title mb-2">
        <h6>{{ data.title }}</h6>
      </div>
      <div class="list-app-feature__items">
        <ul>
          <li class="mb-1" v-for="(item, index2) of data.list" :key="index2">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListAppFeature",
  props: ["listAppFeature"],
};
</script>

<style lang="scss">
.list-app-feature {
  background-color: #fbfafa;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 28px 40px;

  &__inner {
    @include mobile {
      margin-bottom: 30px;
    }
  }

  @include tablet {
    grid-template-columns: 1fr 1fr;
  }

  @include mobile {
    grid-template-columns: 1fr;
    margin-bottom: 20px;
  }

  li {
    list-style-type: disc;
  }
}
</style>
