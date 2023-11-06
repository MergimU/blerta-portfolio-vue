<template>
  <Work
    title="Thrive - Core and Activity app"
    subtitle="Design Lead"
    :firstImage="thrive"
    :secondImage="thrive"
    :thirdImage="thrive"
    :fourthImage="thrive"
    :fifthImage="thrive"
    :sixthImage="thrive"
  />
</template>

<script>
import Work from "../../components/Work.vue";

export default {
  name: "Thrive",
  components: { Work },
  data() {
    return {
      thrive: require("@/assets/images/thrive/thrive-1.png"),
    };
  },
};
</script>
