<template>
  <section>
    <div
      class="bg-cover hover:bg-gray object-cover object-center h-64 w-full"
      style="
        background-image: url('https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-3.jpg');
      "
    ></div>
    <div class="flex flex-row p-6 divide-x-2">
      <div class="basis-1/2">
        <h1 class="text-2xl mb-2 font-bold text-blue-900">Modern Chateau</h1>
        <p class="font-bold"><sup>$</sup>{{ price }}</p>
      </div>
      <div class="basis-1/2 pl-3">
        <div>
          <p class="mt-2">
            <span class="mr-2"><i class="fas fa-chart-area"></i></span>
            Sq Ft: 3800
          </p>
          <p class="mt-2">
            <span class="mr-2"><i class="fas fa-bed"></i></span>
            Beds: 2
          </p>
          <p class="mt-2">
            <span class="mr-2"><i class="fas fa-shower"></i></span>
            Baths: 2
          </p>
        </div>
      </div>
    </div>

    <div class="directions md:pl-8">
      <p class="mt-2">
        <span class="text-blue-700 mr-3"
          ><i class="fas fa-map-marker-alt"></i
        ></span>
        6 killo near yekatit 12 hospital
      </p>
    </div>

    <div class="show-details">
      <button
        class="bg-white w-full md:mt-8 hover:bg-blue-500 text-gray-800 font-semibold py-4 px-4 border border-blue-100 rounded shadow"
      >
        <router-link :to="houseDetailLink">Show Details</router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "name", "description", "price"],
  computed: {
    houseDetailLink() {
      return "/houses/" + this.id;
    },
  },
};
</script>
