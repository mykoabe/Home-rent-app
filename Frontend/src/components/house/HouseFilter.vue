<template>
  <section>
    <div class="mt-16 md:mx-28 mx-8 space-y-4 my-8">
      <span class="text-blue-900 font-bold text-4xl"
        >Find Your Home</span
      >
      <div class="mt-2 text-lg">
        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="appartment"
            checked
            @change="setFilter"
          />
          <span class="ml-2 text-lg">Appartment</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="villa"
            checked
            @change="setFilter"
          />
          <span class="ml-2">Individual villa</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="farm"
            checked
            @change="setFilter"
          />
          <span class="ml-2">Farm house</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="modern"
            checked
            @change="setFilter"
          />
          <span class="ml-2">Modern Home</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="office"
            checked
            @change="setFilter"
          />
          <span class="ml-2">Office Space</span>
        </label>

        <label class="inline-flex items-center ml-6">
          <input
            type="checkbox"
            class="form-checkbox"
            id="town"
            checked
            @change="setFilter"
          />
          <span class="ml-2">Town house</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        appartment: true,
        villa: true,
        farm: true,
        modern: true,
        office: true,
        town: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      console.log(isActive);
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style></style>
