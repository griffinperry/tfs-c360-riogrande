<template>
  <div>
    <hero></hero>
    <team></team>
  </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import team from "./components/team.vue";

export default {
  name: "components",
  components: {
    Hero,
    BasicElements,
    team,
  },
};
</script>
