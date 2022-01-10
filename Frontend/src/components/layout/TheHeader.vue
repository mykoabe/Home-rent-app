<template>
  <section>
    <div id="container">
      <div
        id="top-nav"
        class="sm:flex space-y-1 bg-blue-900 items-baseline text-white h-10"
      >
        <div id="nav-menu" class="flex-1 space-x-3 ml-6">
          <div class="flex md:flex-row flex-col">
            <a href="#" class="text-sm hover:font-medium md:mx-4"
              ><router-link to="/home"
                ><span
                  ><i class="fas fa-envelope-open-text mr-2"></i>
                  mikiabebe@gmail.com
                </span></router-link
              ></a
            >
            <a href="#" class="text-sm hover:font-medium md:mx-4"
              ><router-link to="/houses"
                ><span><i class="fas fa-map-marker-alt mr-2"></i></span>6 Kilo
                Yekatit 12 Square</router-link
              ></a
            >
          </div>
        </div>

        <div id="nav-menu-right" class="space-x-4 mr-16 hidden md:flex">
          <button class="btn btn-account">
            <router-link to="/login">Login</router-link>
          </button>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div
        id="bottom-nav"
        class="flex lg:ml-20 pt-5 sm:mt-6 md:mx-6 bg-gray-100 md:bg-white text-black"
      >
        <div class="flex-1">
          <div class="flex">
            <a
              href="#"
              class="text-gray-800 sm:text-xl text-sm font-bold hover:text-gray-700 md:text-2xl"
              ><img
                class="w-20 md:w-32"
                src="https://houzy.wpengine.com/wp-content/uploads/2020/04/logo.png"
                alt=""
            /></a>

            <div
              id="nav-menu"
              class="space-x-3 md:ml-6 md:mt-2 ml-2 md:text-lg text-sm md:font-bold"
            >
              <a href="#" class="md:mx-4"
                ><router-link to="/home">Home</router-link></a
              >
              <a href="#" class="md:mx-4"
                ><router-link to="/houses">Houses</router-link></a
              >
              <a href="#" class="md:mx-4"
                ><router-link to="/addHouse">AddHouse</router-link></a
              >
            </div>
          </div>
        </div>

        <div id="nav-menu-right" class="flex-none space-x-4 lg:mr-8 sm:md-10">
          <button class="btn btn-login capitalize">
            <router-link to="/register">Join as home owner</router-link>
          </button>
        </div>
      </div>
      <!-- Bottom Navigation endes here -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="postcss">
.btn {
  @apply px-4 py-1 text-sm text-white font-semibold rounded-full focus:outline-none;
}
.btn-account {
  @apply bg-gray-500 hover:bg-red-300;
}
.btn-login {
  @apply bg-blue-900 py-3 px-5 text-white invisible  md:visible;
}

.btn-submit {
  @apply md:bg-red-500 md:py-3 md:px-5 md:text-white bg-red-300;
}
</style>
