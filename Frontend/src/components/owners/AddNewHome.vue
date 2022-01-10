<template>
  <section>
    <div id="trending_houses" class="lg:mx-32 sm:mt-6 md:mx-6 mx-6">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6 font-serif">
          <div class="mt-5 md:mt-0 md:col-span-3">
            <form @submit.prevent="submitForm" action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md bg-red-500">
                <div class="px-4 py-5 bg-gray-100 sm:p-6">
                  <div class="font-bold text-5xl text-center my-10">
                    Add new home
                  </div>
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="house_name"
                        class="block text-xl font-bold text-gray-700"
                        >House name</label
                      >
                      <input
                        v-model.trim="houseName.val"
                        @blur="clearValidity('houseName')"
                        type="text"
                        name="house_name"
                        id="house_name"
                        autocomplete="house-name"
                        placeholder="enter house name"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                      <p v-if="!houseName.isValid" class="text-red-500">
                        house Name must not be empty
                      </p>
                    </div>

                    <div class="col-span-6 w-60 sm:col-span-3">
                      <label
                        for="price"
                        class="block text-xl text-black font-bold"
                        >Price</label
                      >
                      <input
                        v-model.trim="price.val"
                        @blur="clearValidity('price')"
                        type="text"
                        name="price"
                        id="price"
                        autocomplete="price"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                      <p v-if="!price.isValid" class="text-red-500">
                        Price must not be empty
                      </p>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="inline text-xl font-bold text-black"
                        >Description</label
                      >
                      <textarea
                        v-model.trim="description.val"
                        @blur="clearValidity('description')"
                        name="description"
                        class="resize mt-1 h-8 block shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      ></textarea>
                      <p class="mt-2 text-md text-black">
                        Brief description for your house.
                      </p>
                      <p v-if="!description.isValid" class="text-red-500">
                        Description must not be empty
                      </p>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="category"
                        class="inline text-xl font-bold text-black"
                        >categorys</label
                      >
                      <textarea
                        v-model.trim="category.val"
                        name="category"
                        class="resize mt-1 h-8 block shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      ></textarea>
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="room_no"
                        class="block text-xl font-bold text-black"
                        >Room Number</label
                      >
                      <input
                        v-model.trim="room_no.val"
                        type="text"
                        name="room_no"
                        id="city"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label
                        for="floor_no"
                        class="block text-xl font-bold text-black"
                        >Floor Number</label
                      >
                      <input
                        v-model.trim="floor_no.val"
                        type="text"
                        name="floor_no"
                        id="floor_no"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label
                        for="state"
                        class="block text-xl font-bold text-black"
                        >State</label
                      >
                      <input
                        v-model.trim="state.val"
                        type="text"
                        name="state"
                        id="state"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                    </div>
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label
                        for="sub_city"
                        class="block text-xl font-bold text-black"
                        >Sub city</label
                      >
                      <input
                        v-model.trim="sub_city.val"
                        type="text"
                        name="sub_city"
                        id="sub_city"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 ml-10">
                      <label
                        for="wereda"
                        class="block text-xl font-bold text-black"
                        >Wereda</label
                      >
                      <input
                        v-model.trim="wereda.val"
                        type="text"
                        name="wereda"
                        id="wereda"
                        class="mt-1 h-8 block w-full shadow-sm sm:text-sm rounded-md outline-none pl-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-xl text-black font-bold md:mt-8">
                      house Image
                    </label>
                    <div
                      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                    >
                      <div class="space-y-1 text-center">
                        <svg
                          class="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="True"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              class="sr-only"
                              @change="onFileSelected"
                            />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 class="text-red-500 bg-white" v-if="!formIsValid">
                  Please fix the above errors and submit again
                </h1>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit house
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      houseName: {
        val: "",
        isValid: true,
      },
      price: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      room_no: {
        val: 0,
        isValid: true,
      },
      floor_no: {
        val: 0,
        isValid: true,
      },
      category: {
        val: "",
        isValid: true,
      },
      state: {
        val: "",
        isValid: true,
      },
      sub_city: {
        val: "",
        isValid: true,
      },
      wereda: {
        val: "",
        isValid: true,
      },
      formIsValid: true,
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.houseName.val === "") {
        this.houseName.isValid = false;
        this.formIsValid = false;
      }
      if (this.price.val === "") {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (this.category.val === "") {
        this.category.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        house: this.houseName.val,
        price: this.price.val,
        descr: this.description.val,
        category: this.category.val,
        room_no: this.room_no.val,
        floor_no: this.floor_no.val,
        state: this.state.val,
        subcity: this.subcity.val,
        wereda: this.wereda.val,
      };
      const realData = {
        name: formData.house,
        description: formData.descr,
        price: formData.price,
        category: formData.category,
        room_no: formData.room_no,
        floor_no: formData.floor_no,
        state: formData.state,
        subcity: formData.subcity,
        wereda: formData.wereda
      };
      console.log(realData);
    //   this.$store.dispatch("houses/inserthouses", realData);
    },
  },
};
</script>

<style></style>
