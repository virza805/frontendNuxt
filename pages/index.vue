<template>
  <div>
    <!-- <vue-slick-carousel :arrows="true" :dots="false">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </vue-slick-carousel> -->
    <div class="p-8 hero-slide">
      <vue-slick-carousel class="" :arrows="false" :dots="true">

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color  font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-5xl font-bold mb-6 text-gray-800">
                  Bengal Vegetable
                  farm Organic 100%
                </h2>
                <p class="mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end"><img width="550" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color  font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-5xl font-bold mb-6 text-gray-800">
                  Bengal Vegetable
                  farm Organic 100%
                </h2>
                <p class="mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end"><img width="550" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex items-center">
              <div class="w-1/2 mr-6 font-size-22">
                <p class="bs-dark-green-color  font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-5xl font-bold mb-6 text-gray-800">
                  Bengal Vegetable
                  farm Organic 100%
                </h2>
                <p class="mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end"><img width="550" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>
      </vue-slick-carousel>

      <div class="container">
        <h3 class="text-4xl mb-6">Search by Category</h3>
        <div class="flex items-center">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel v-bind="categoryCarouselSettings">
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-2.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-3.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-4.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-6.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

<template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  export default {
    components: {
      Header,
      Footer
    },
    name: 'IndexPage',
    data() {
      return {
        categoryCarouselSettings:{
          'slidesToShow': 6,
          'prevArrow': '>'
        }
      }
    },
  }

</script>
<style>
.hero-slide .slick-list .slick-track {
    display: flex;
}
</style>
