<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<template>
  <div
    class="leading-normal tracking-normal gradient"
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <the-header></the-header>
    <router-view></router-view>
    <!-- <the-footer></the-footer> -->
  </div>
</template>

<style></style>
