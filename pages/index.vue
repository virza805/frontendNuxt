<template>
  <div class="tanvir">
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
            <div class="flex flex-col-reverse md:flex-row items-center">
              <div class="w-full md:w-1/2 p-2 mb-5 md:mr-6 font-size-22">
                <p class="bs-dark-green-color text-sm lg:text-2xl md:font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-xl md:text-5xl font-bold mb-4 text-gray-800">
                  Bengal Vegetable
                  farm Organic 100%
                </h2>
                <p class="mb-4 text-sm md:text-xl md:mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-full md:w-1/2 flex items-center justify-center pb-3 md:justify-end"><img class="w-56 md:w-11/12" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>

        <div class="slide-bg rounded-2xl pt-8">
          <div class="container">
            <div class="flex flex-col-reverse md:flex-row items-center">
              <div class="w-full md:w-1/2 p-2 mb-5 md:mr-6 font-size-22">
                <p class="bs-dark-green-color text-sm lg:text-2xl md:font-size-32 mb-4">Save up 30% off</p>
                <h2 class="text-xl md:text-5xl font-bold mb-4 text-gray-800">
                  Bengal Vegetable
                  farm Organic 100%
                </h2>
                <p class="mb-4 text-sm md:text-xl md:mb-8">Lorem ipsum, dolor sit amet con itae facere quisquam?</p>
                <nuxt-link to="/" class="bs-button text-base">Shop Now</nuxt-link>
              </div>
              <div class="w-full md:w-1/2 flex items-center justify-center pb-3 md:justify-end"><img class="w-56 md:w-11/12" src="~/assets/img/hero.png" alt=""></div>
            </div>
          </div>
        </div>



      </vue-slick-carousel>

      <div class="container mb-24">
        <h3 class="text-xl md:text-4xl mb-6 mt-6">Search by Category</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel class="category-carousel" v-bind="categoryCarouselSettings">

          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries1</h4>
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
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-1.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>
          <div class="bg-gray-200 p-4">
            <div class="h-32 flex justify-center items-center">
              <img src="~/assets/img/carousel-img-5.png" alt="">
            </div>
            <h4 class="text-xl">Groceries</h4>
          </div>

          <!-- <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template> -->

        </vue-slick-carousel>


      </div>

      <div class="container">

        <div class="flex flex-wrap md:-mx-6 mb-12">

          <div  v-for=" slid  in slider_list" :key="slid.id"  class="cat-item w-full my-2 md:w-1/2 px-2 md:px-6">
            <div class="buy-get flex flex-col-reverse md:flex-row md:p-12 md:pr-2 p-4 rounded">
              <div class="w-full md:w-1/2">
                <p class="bs-dark-orange-color md:text-2xl text-xl mb-6 mt-2">{{ slid.sub }}</p>
                <h3 class="md:text-4xl text-2xl leading-relaxed font-bold mb-10">{{ slid.title }}</h3>
                <nuxt-link :to="slid.btn_link" class="bs-white-btn">{{ slid.btn }}</nuxt-link>
              </div>
              <div class="w-full m-0 p-0 md:w-1/2 flex justify-center md:justify-end">
                <img class=" m-0 p-0" src="~/assets/img/buyGet.png" alt="">
              </div>
            </div>
          </div>
          <!-- <div class="cat-item w-full my-2 md:w-1/2 px-2 md:px-6">
            <div class="buy-get flex flex-col-reverse md:flex-row md:p-12 md:pr-2 p-4 rounded">
              <div class="w-full md:w-1/2">
                <p class="bs-dark-orange-color md:text-2xl text-xl mb-6 mt-2">Get 1 Buy 1</p>
                <h3 class="md:text-4xl text-2xl leading-relaxed font-bold mb-10">Deals of the Week</h3>
                <nuxt-link to="/" class="bs-white-btn">Order Now</nuxt-link>
              </div>
              <div class="w-full m-0 p-0 md:w-1/2 flex justify-center md:justify-end">
                <img class=" m-0 p-0" src="~/assets/img/buyGet.png" alt="">
              </div>
            </div>
          </div>
          <div class="cat-item w-full my-2 md:w-1/2 px-2 md:px-6">
            <div class="buy-get flex flex-col-reverse md:flex-row md:p-12 md:pr-2 p-4 rounded">
              <div class="w-full md:w-1/2">
                <p class="bs-dark-orange-color md:text-2xl text-xl mb-6 mt-2">Buy 2 Get 1</p>
                <h3 class="md:text-4xl text-2xl leading-relaxed font-bold mb-10">Deals of the Week</h3>
                <nuxt-link to="/" class="bs-white-btn">Order Now</nuxt-link>
              </div>
              <div class="w-full m-0 p-0 md:w-1/2 flex justify-center md:justify-end">
                <img class=" m-0 p-0" src="~/assets/img/buyGet.png" alt="">
              </div>
            </div>
          </div> -->

        </div>

        <!--End now-->


        <h3 class="text-xl md:text-4xl mb-6">Deals of the Week</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <div class="flex flex-wrap ">
          <div v-if="load" class="text-xl my-3 text-red-400 font-medium text-center "> Loading ... .. .</div>

          <div v-for="product in product_list.data" :key="product.id" class="w-1/2 md:w-1/4 px-4 mb-10">

            <div class="single-bs-product">
              <div class="h-80  relative mb-6">
                <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                  <img class="mx-auto w-auto" src="~/assets/img/carousel-img-1.png" alt="Workflow" />
                </div>

                <div class="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center">
                  <div class="bg-black absolute h-full w-full opacity-60"></div>
                  <button @click.prevent="productDetails"
                    class=" absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center">Details
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                </div>
              </div>

              <h4 class="text-xl mb-3">{{ product.name }}</h4>
              <p><span class="font-medium bs-dark-orange-color">$ {{ product.price }} </span> <del
                  class="text-gray-400">${{ product.sell_price }}</del></p>

            </div>
          </div>
        </div>

        <div class="text-center mb-10">
          <pagination v-model="page" :records="total" :per-page="per_page" @paginate="getProductData"></pagination>
        </div>
        <!-- <vue-slick-carousel v-if="dealsOfTheDayProducts.length" class="category-carousel mb-16 text-center" v-bind="productCarouselSettings">
          <SingleProductBox v-for="product in dealsOfTheDayProducts" :key="product.id" :product="product"/>
        </vue-slick-carousel> -->


        <h3 class="text-xl md:text-4xl mb-6">Popular Brands</h3>
        <div class="flex items-center mb-10">
          <div style="height: 3px" class="w-32 bs-dark-green-bg"></div>
          <div style="height: 2px" class="w-full bg-gray-200"></div>
        </div>

        <vue-slick-carousel class="category-carousel mb-16 text-center" v-bind="categoryCarouselSettings">
          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-2.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-3.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-4.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-5.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-6.png" alt=""></div>
          </div>

          <div class="">
            <div class="h-32 flex justify-center items-center"><img src="~/assets/img/brand-1.png" alt=""></div>
          </div>



          <!-- <template #prevArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>

          <template #nextArrow="arrowOption">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>-->
        </vue-slick-carousel>

        <div class="flex flex-wrap md:-mx-6 mb-12">

          <div v-for="cat in cat_list " :key="cat.id" class="cat-item w-full my-2 md:w-1/3 px-2 md:px-6">
            <div class="category flex flex-col-reverse md:flex-row p-6 rounded-xl">
              <div class="w-full md:w-2/3">
                <h3 class="font-size-32 leading-tight font-semibold mb-10">{{ cat.name }}</h3>
                <nuxt-link :to="`/category/?id=${cat.id}`" class="round-link ">
                  <img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>
              </div>
              <div class="w-full md:w-1/3 flex justify-end">
                <img src="~/assets/img/fresh-fruit.png" alt="">
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Footer from '../components/Footer.vue'
  import Header from '../components/Header.vue'
  import SingleProductBox from '../components/SingleProductBox.vue'

  import dealsOfTheDayProducts from '../assets/css/deals-of-the-day-products.json'

  export default {
    head: {
      title: "Home",
    },
    name: 'IndexPage',
    components: {
      Header,
      Footer,
      SingleProductBox
    },
    data() {
      return {
        categoryCarouselSettings: {
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            }
        ],
          'slidesToShow': 6,
          'prevArrow': '>'
        },
        productCarouselSettings: {
          responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],
          'slidesToShow': 4,
          'prevArrow': '>'
        },
        dealsOfTheDayProducts: [],

        slider_list: {},
        hero_slider: {},
        cat_list: {},
        cat_slider_list: {},
        page: 1,
        data: [],
        per_page: 0,
        total: 0,
        product_list: {},

      }
    },

    created: function(){
      this.getData();
      this.getCatData();
      this.getCatSliderData();
      this.getProductData();
      // this.getSliderData();
    },

    methods: {

      async getData() {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-buy-get')
        this.slider_list = r.data;
        this.load = false;
      },

// for Category Slider Show data
      async getCatSliderData() {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-categories')
        this.cat_slider_list = r.data;
        this.load = false;
      },

// before footer Category Show data
      async getCatData() {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-footer-top-cat')
        this.cat_list = r.data;
        this.load = false;
      },

// Product Show with paginate data
      async getProductData(page = 1) {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-product/?page=' + page)
        this.product_list = r.data;
        this.total = r.data.total;
        this.per_page = r.data.per_page;
        this.load = false;

      },

      // async getSliderData() {
      //   this.load = true;
      //   let r = await this.$axios.$get('/api/all/client-slider')
      //   this.hero_slider = r.data;

      //   // console.log(this.hero_slider)
      //   // this.total = r.total;
      //   // this.per_page = r.per_page;
      //   this.load = false;
      // },
    },


    mounted() {
      this.dealsOfTheDayProducts = dealsOfTheDayProducts;
      console.log(this.dealsOfTheDayProducts)
    }

  }

</script>
<style>
  .hero-slide .slick-list .slick-track {
    display: flex;
  }

  .category-carousel.slick-slider.slick-initialized {
    position: relative;
  }

  .category-carousel button.slick-arrow.slick-next {
    position: absolute;
    right: 0;
    top: 0;
  }

  .category-carousel button {
    margin-bottom: 20px;
  }
  .slick-list {
    overflow-x: hidden;
  }
  .cat-item:nth-child(even) .category {
    background: #fff0dc;
  }
  .cat-item:nth-child(odd) .category {
    background: #ddf1d6;
  }
  .cat-item:nth-child(even) .buy-get {
    background: #f2cddf;
  }
  .cat-item:nth-child(odd) .buy-get {
    background: #beefbf;
  }
  .round-link {
    @apply  h-12 w-12 flex justify-center items-center rounded-full bg-white
  }

</style>
