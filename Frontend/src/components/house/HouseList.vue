<template>
  <section>
    <!-- list of houses -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-3 md:mx-28 md:mt-10 space-y-5 md:space-y-0"
    >
      <div
        v-for="item in filterdHouses"
        :key="item.message"
        class="max-w-sm rounded-sm overflow-hidden shadow-lg"
      >
        <house-item
          :id="item.id"
          :name="item.name"
          :description="item.description"
          :price="item.price"
        ></house-item>
      </div>
    </div>
    <!-- List of houses ends here -->
  </section>
</template>

<script>
import HouseItem from "./HouseItem.vue";
export default {
  components: {
    HouseItem,
  },
  computed: {
    filterdHouses() {
      return this.$store.getters["appartment/appartments"];
    },
  },
};
</script>

<style></style>
