<template>
  <div>    <button
      class="bg-white w-full md:mt-8 hover:bg-blue-500 text-gray-800 font-semibold py-4 px-4 border border-blue-100 rounded shadow"
      v-if="!link"
      :class="mode"
    >
      <slot></slot>
    </button>
    <router-link
      v-else
      class="bg-white w-full md:mt-8 hover:bg-blue-500 text-gray-800 font-semibold py-4 px-4 border border-blue-100 rounded shadow"
      :to="to"
      :class="mode"
    >
      <slot></slot
    ></router-link>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
