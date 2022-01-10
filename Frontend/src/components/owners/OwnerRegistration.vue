<template>
  <section>
    <main
      class="bg-gray-100 mb-12 sm:w-full lg:max-w-7xl mx-auto p-8 md:p-12 my-5 rounded-lg shadow-2xl"
    >
      <section class="sm:max-w-sm md:max-w-md lg:max-w-7xl m-5">
        <div class="font-bold text-5xl text-center my-10">
          Register as home owner
        </div>
        <div class="font-bold text-lg text-center my-10">
          You can register here and post houses for rent and sell all over
          ethiopia
        </div>
      </section>

      <section
        class="xs:max-w-xs sm:max-w-sm mx-auto md:max-w-md text-xl text-blue-900 lg:max-w-lg m-5"
      >
        <ul>
          <li class="">
            <span><i class="fas fa-check mr-6"></i></span>Appartments
          </li>
          <li class="">
            <span><i class="fas fa-check mr-6"></i></span>Individual Villa
          </li>
          <li class="">
            <span><i class="fas fa-check mr-6"></i></span>Farm House
          </li>
        </ul>
      </section>

      <section class="bg-blue-100 rounded-lg mx-auto py-5 lg:max-w-xl">
        <form
          id="register"
          method="POST"
          class="text-sm m-8 xs:p-4 sm:p-4 md:p-8 lg:p-8"
          @submit.prevent="submitForm"
        >
          <div
            class="relative border rounded mb-4 shadow appearance-none label-floating"
          >
            <input
              class="w-full py-2 px-3 text-black leading-normal rounded"
              id="f_name"
              name="f_name"
              type="text"
              placeholder="First Name"
            />
            <label
              class="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
              for="f_name"
            >
              First Name
            </label>
          </div>

          <div
            class="relative border rounded mb-4 shadow appearance-none label-floating"
          >
            <input
              class="w-full py-2 px-3 text-black leading-normal rounded"
              id="l_name"
              name="l_name"
              type="text"
              placeholder="Last Name"
            />
            <label
              class="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
              for="l_name"
            >
              Last Name
            </label>
          </div>

          <div
            class="relative border rounded mb-4 shadow appearance-none label-floating"
          >
            <input
              class="w-full py-2 px-3 text-black leading-normal rounded"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail Address"
            />
            <label
              class="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
              for="email"
            >
              E-mail Address
            </label>
          </div>
          <div
            class="relative border rounded mb-4 shadow appearance-none label-floating"
          >
            <input
              class="w-full py-2 px-3 text-black leading-normal rounded cursor-pointer"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <label
              class="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
              for="password"
            >
              Password
            </label>
          </div>
          <div
            class="relative border rounded mb-4 shadow appearance-none label-floating"
          >
            <input
              class="w-full py-2 px-3 text-black leading-normal rounded"
              id="confirm-password"
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
            />
            <label
              class="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
              for="confirm-password"
            >
              Confirm Password
            </label>
          </div>
          <div class="flex flex-wrap py-2 items-center justify-evenly">
            <div
              class="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-12 text-center align-baseline"
            >
              <input
                class="bg-black hover:bg-white hover:text-black text-white w-full py-2 px-4 rounded"
                type="submit"
                value="Register"
              />
            </div>
            <div
              class="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-12 text-center align-baseline"
            >
              <a
                class="inline-block mt-3 align-baseline text-blue-900 hover:text-black"
                href="#"
                onclick="document.getElementById('register').reset(); return false;"
              >
                Clear Form
              </a>
            </div>
          </div>
        </form>
      </section>

      <div class="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto my-8">
        <p class="text-black mx-auto">
          Already have an account?

          <a class="font-bold hover:underline">
            <router-link to="/login">Login here</router-link> </a
          >.
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
