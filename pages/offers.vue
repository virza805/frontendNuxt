<template>

  <div>

    <h2 class="my-14 text-4xl text-red-500 font-bold text-center">Offers Page</h2>


    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="~/assets/img/Thanks.jpg" alt="Man looking at item at a store">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

    <vue-slick-carousel class="" :arrows="false" :dots="true">

        <!-- <div v-for="slider in hero_slider" :key="slider.id" class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex flex-col-reverse md:flex-row items-center">
              <div class="w-full md:w-1/2 p-2 mb-5 md:mr-6 font-size-22">
                <p class="bs-dark-green-color text-sm lg:text-2xl md:font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-xl md:text-5xl font-bold mb-4 text-gray-800">

{{ slider.title }}
                </h2>
                <p class="mb-4 text-sm md:text-xl md:mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-full md:w-1/2 flex items-center justify-center pb-3 md:justify-end"><img class="w-56 md:w-11/12" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div> -->


        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex flex-col-reverse md:flex-row items-center">
              <div class="w-full md:w-1/2 p-2 mb-5 md:mr-6 font-size-22">
                <p class="bs-dark-green-color text-sm lg:text-2xl md:font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-xl md:text-5xl font-bold mb-4 text-gray-800">
Bengle Shop 100% peure
                </h2>
                <p class="mb-4 text-sm md:text-xl md:mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-full md:w-1/2 flex items-center justify-center pb-3 md:justify-end"><img class="w-56 md:w-11/12" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>



      </vue-slick-carousel>
  </div>
</template>

<script>
export default {
  head: {
    title: "Offers",
  },
  data() {
    return {
      hero_slider: {},
    }
  },

  created: function(){
    this.getSliderData();
  },

  methods: {

      async getSliderData() {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-slider')
        this.hero_slider = r.data;

        console.log(this.hero_slider)
        // this.total = r.total;
        // this.per_page = r.per_page;
        this.load = false;
      },
  }

}
</script>

<style scoped>

</style>
