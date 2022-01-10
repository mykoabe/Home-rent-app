<template>
  <section>
    <!-- list of houses -->
    <house-filter @change-filter="setFilters"></house-filter>
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
import HouseFilter from "./HouseFilter.vue";
export default {
  components: {
    HouseItem,
    HouseFilter,
  },
  data() {
    return {
      activeFilters: {
        appartment: true,
        villa: true,
        farm: true,
        modern: true,
        office: true,
        town: true,
      },
    };
  },
  computed: {
    filterdHouses() {
      const houses = this.$store.getters["appartment/appartments"];
      return houses.filter((house) => {
        if (this.activeFilters.appartment && house.category === "Appartment") {
          return true;
        }
        if (this.activeFilters.villa && house.category === "Individual Villa") {
          return true;
        }
        if (this.activeFilters.farm && house.category === "Farm House") {
          return true;
        }
        if (this.activeFilters.modern && house.category === "Modern Home") {
          return true;
        }
        if (this.activeFilters.office && house.category === "Office Space") {
          return true;
        }
        if (this.activeFilters.town && house.category === "Town House") {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style></style>
