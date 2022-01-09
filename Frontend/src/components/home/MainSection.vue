<template>
  <section>
    <div
      class="w-full bg-gray-200"
      style="
        background-size: cover;
        background-position: 50% 50%;
        background-image: url('https://houzy.wpengine.com/wp-content/uploads/2020/06/filler-bg-1.png');
        transform: translateY(30.9px);
      "
    >
      <div class="bg-gradient-to-b from-blue-200 to-transparent">
        <!-- First sliding ends here -->
        <div class="top bg-opacity-30">
          <div id="inside" class="flex md:flex-row flex-col space-y-6 md:space-y-0">
            <div class="basis-1/2 md:py-48">
              <div class="md:ml-28 mx-4 leading-loose">
                <p>
                  <span
                    class="inline-block animate-bounce rounded-full p-4 text-white text-sm"
                  >
                    <i
                      class="fas fa-map-marker-alt mr-2 fa-3x text-blue-900"
                    ></i>
                  </span>
                </p>

                <h1 class="text-4xl leading-loose font-bold text-blue-900">
                  RENT AND BUY HOUSE NOW @ AFFORDABLE PRICE
                </h1>
                <h5 class="leading-loose">
                  Making Real Estate Simple Easier for your Business or your
                  Family
                </h5>
              </div>
            </div>

            <div class="basis-1/2 space-y-6 md:space-y-0">
              <img
                class="object-fill md:rounded-bl-full rounded w-full h-full mr-8 "
                src="../../assets/images/family_auto_x2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- first sliding ends here -->

        <!-- second sliding ends here -->
        <div class="second bg-opacity-30">
          <div id="inside" class="flex flex-col mx-6 space-y-5 md:space-y-0 md:flex-row md:mx-28">
            <div class="basis-7/12">
              <div class="grid grid-cols-2 gap-4 space-y-6">
                <div class="flex mt-4">
                  <div class="">
                    <img
                      src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-hotel-city-elements-flatart-icons-lineal-color-flatarticons.png"
                    />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold">Appartement</h3>
                    <h5>(5 Properties)</h5>
                  </div>
                </div>

                <div class="flex">
                  <div class="">
                    <img
                      src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-farm-house-farming-and-agriculture-wanicon-flat-wanicon.png"
                    />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-xl font-bold">Farm House</h3>
                    <h5>(4 Properties)</h5>
                  </div>
                </div>

                <div class="flex">
                  <div class="">
                    <img
                      class="w-16 h-16"
                      src="https://img.icons8.com/fluency/48/000000/house-with-a-garden.png"
                    />
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class="text-xl font-bold">Individual Villa</h3>
                    <h5>(3 Properties)</h5>
                  </div>
                </div>

                <div class="flex">
                  <div class="">
                    <img
                      class="w-14 h-14"
                      src="https://img.icons8.com/fluency/48/000000/mobile-home.png"
                    />
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class="text-xl font-bold">Modern Home</h3>
                    <h5>(1 Properties)</h5>
                  </div>
                </div>

                <div class="flex">
                  <div class="">
                    <img
                      src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-office-home-office-photo3ideastudio-lineal-color-photo3ideastudio.png"
                    />
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class="text-xl font-bold">Office Space</h3>
                    <h5>(4 Properties)</h5>
                  </div>
                </div>

                <div class="flex">
                  <div class="">
                    <img
                      src="https://houzy.wpengine.com/wp-content/uploads/2020/04/real-estate-category-icon-5.png"
                    />
                  </div>
                  <div class="ml-4 mt-1">
                    <h3 class="text-xl font-bold">Town House</h3>
                    <h5>(5 Properties)</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="basis-5/12 mt-6">
              <div class="flex space-y-5 flex-col divide-y-2 divide-blue-300">
                <div class="flex-1">
                  <h1 class="text-2xl font-bold">Get access over</h1>
                  <h1 class="font-mono text-4xl text-gray-100 md:text-4xl">
                    <span
                      style="will-change: transform"
                      class="inline-flex h-16 pt-1 md:animate-type md:group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change"
                    >
                      ELITE <span class="text-blue-700 ml-3">HOUSES</span> 👋
                    </span>
                  </h1>
                  <p class="text-lg">Get a Feature Rich Home</p>
                </div>

                <div class="flex-1 space-y-1 pt-4">
                  <h1 class="text-xl font-bold">Get Connection over</h1>
                  <h1 class="text-4xl font-black font-bolder">
                    BEST <span class="text-blue-700">SELLERS</span>
                  </h1>
                  <p class="text-xl">To get your best home</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Second sliding ends here -->
      </div>

      <!--  third sliding start here-->
      <div
        class="carousel rounded relative overflow-hidden shadow-xl md:mx-28 md:my-10"
      >
        <div class="carousel-inner relative overflow-hidden w-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0 bg-center">
            <div class="pt-6 pb-12">
              <div id="card" class="">
                <!-- container for all cards -->
                <div class="container lg:w-11/12 mx-auto flex flex-col">
                  <!-- card -->
                  <div
                    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
                  >
                    <!-- media -->
                    <div class="h-full w-full md:w-full basis-2/3">
                      <img
                        class="inset-0 h-full w-full object-cover object-center"
                        src="https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-7.jpg"
                      />
                    </div>

                    <!-- content -->
                    <div
                      class="basis-1/3 w-full py-4 md:pt-16 px-6 text-gray-800 flex flex-col space-y-5"
                    >
                      <h3 class="font-semibold text-3xl leading-tight truncate">
                        Pine Tree Villa
                      </h3>
                      <p class="mt-2 text-xl font-bold">$ 89785493</p>
                      <p class="mt-2">
                        <span class="text-blue-700 mr-3"
                          ><i class="fas fa-map-marker-alt"></i
                        ></span>
                        6 kill near yekatit 12 hospital
                      </p>
                      <p class="mt-2 md:text-lg">
                        This is the best house ever made with in collaboration
                        of family memebers. I is very attractive and the inside
                        one is also very astonishing and gives nothing.
                      </p>
                      <p class="mt-2">
                        <span class="mr-2"
                          ><i class="fas fa-chart-area"></i
                        ></span>
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
                      <button
                        class="bg-white md:w-6/12 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                  <!--/ card-->
                </div>
                <!--/ flex-->
              </div>
            </div>
          </div>
          <label
            for="carousel-3"
            class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"
            ><i class="fas fa-angle-left mt-3"></i
          ></label>
          <label
            for="carousel-2"
            class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="fas fa-angle-right mt-3"></i
          ></label>

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0 bg-center">
            <div class="pt-6 pb-12">
              <div id="card" class="">
                <!-- container for all cards -->
                <div class="container lg:w-11/12 mx-auto flex flex-col">
                  <!-- card -->
                  <div
                    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
                  >
                    <!-- media -->
                    <div class="h-full w-full md:w-full basis-2/3">
                      <img
                        class="inset-0 h-full w-full object-cover object-center"
                        src="https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-8.jpg "
                      />
                    </div>

                    <!-- content -->
                    <div
                      class="basis-1/3 w-full py-4 md:pt-16 px-6 text-gray-800 flex flex-col space-y-5"
                    >
                      <h3 class="font-semibold text-3xl leading-tight truncate">
                        Pine Tree Villa
                      </h3>
                      <p class="mt-2 text-xl font-bold">$ 89785493</p>
                      <p class="mt-2">
                        <span class="text-blue-700 mr-3"
                          ><i class="fas fa-map-marker-alt"></i
                        ></span>
                        6 kill near yekatit 12 hospital
                      </p>
                      <p class="mt-2 md:text-lg">
                        This is the best house ever made with in collaboration
                        of family memebers. I is very attractive and the inside
                        one is also very astonishing and gives nothing.
                      </p>
                      <p class="mt-2">
                        <span class="mr-2"
                          ><i class="fas fa-chart-area"></i
                        ></span>
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
                      <button
                        class="bg-white md:w-6/12 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                  <!--/ card-->
                </div>
                <!--/ flex-->
              </div>
            </div>
          </div>
          <label
            for="carousel-1"
            class="control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            ><i class="fas fa-angle-left mt-3"></i
          ></label>
          <label
            for="carousel-3"
            class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="fas fa-angle-right mt-3"></i
          ></label>

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0 bg-center">
            <div class="pt-6 pb-12">
              <div id="card" class="">
                <!-- container for all cards -->
                <div class="container lg:w-11/12 mx-auto flex flex-col">
                  <!-- card -->
                  <div
                    class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-100 mx-2"
                  >
                    <!-- media -->
                    <div class="h-full w-full md:w-full basis-2/3">
                      <img
                        class="inset-0 h-full w-full object-cover object-center"
                        src="https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-2.jpg"
                      />
                    </div>

                    <!-- content -->
                    <div
                      class="basis-1/3 w-full py-4 md:pt-16 px-6 text-gray-800 flex flex-col space-y-5"
                    >
                      <h3 class="font-semibold text-3xl leading-tight truncate">
                        Pine Tree Villa
                      </h3>
                      <p class="mt-2 text-xl font-bold">$ 89785493</p>
                      <p class="mt-2">
                        <span class="text-blue-700 mr-3"
                          ><i class="fas fa-map-marker-alt"></i
                        ></span>
                        6 kill near yekatit 12 hospital
                      </p>
                      <p class="mt-2 md:text-lg">
                        This is the best house ever made with in collaboration
                        of family memebers. I is very attractive and the inside
                        one is also very astonishing and gives nothing.
                      </p>
                      <p class="mt-2">
                        <span class="mr-2"
                          ><i class="fas fa-chart-area"></i
                        ></span>
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
                      <button
                        class="bg-white md:w-6/12 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                  <!--/ card-->
                </div>
                <!--/ flex-->
              </div>
            </div>
          </div>
          <label
            for="carousel-2"
            class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
            ><i class="fas fa-angle-left mt-3"></i
          ></label>
          <label
            for="carousel-1"
            class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
            ><i class="fas fa-angle-right mt-3"></i
          ></label>

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
      <!-- third sliding ends here -->
    </div>

    <!-- The bottom one -->
    <div>
      <div class="md:px-80 text-center md:pt-20 space-y-3 mt-10">
        <h1 class="text-4xl font-bold text-blue-900 leading-loose">
          FABULOUS HOUSING @ SPECIAL PRICE FOR NEAR YOU
        </h1>
        <h4 class="mr-5">Bringing the Best Affordable Property Near You.</h4>
        <h4>Everything as you desire.</h4>
      </div>

      <!-- list of houses -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:mx-28 md:mt-10 space-y-5 md:space-y-0">
        <div
          v-for="item in items"
          :key="item.message"
          class="max-w-sm rounded-sm overflow-hidden shadow-lg"
        >
          <div
            class="bg-cover hover:bg-gray object-cover object-center h-64 w-full"
            style="
              background-image: url('https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-3.jpg');
            "
          ></div>
          <div class="flex flex-row p-6 divide-x-2">
            <div class="basis-1/2">
              <h1 class="text-2xl mb-2 font-bold text-blue-900">
                Modern Chateau
              </h1>
              <p class="font-bold"><sup>$</sup>234,567</p>
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
              Show Details
            </button>
          </div>
        </div>
      </div>
      <!-- List of houses ends here -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          message: "first",
        },
        {
          message: "second",
        },
        {
          message: "third",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
