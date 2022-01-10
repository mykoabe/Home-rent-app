<template></template>

<script>
import HeroComponent from "../UI/HeroComponent.vue";
export default {
  props: ["id"],
  components: { HeroComponent },
  data() {
    return {
      selectedAppartement: null,
    };
  },
  computed: {
      name(){
        return this.selectedAppartement.name;
      }
  },
  created() {
    this.selectedAppartement = this.$store.getters[
      "appartment/appartments"
    ].find((appart) => appart.id === this.id);
  },
};
</script>

<style scoped>
.map-responsive {
  overflow: hidden;

  padding-bottom: 56.25%;

  position: relative;

  height: 0;
}

.map-responsive iframe {
  left: 0;

  top: 0;

  height: 100%;

  width: 100%;

  position: absolute;
}
</style>
