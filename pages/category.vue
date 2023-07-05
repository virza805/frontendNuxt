<template>
  <div class="container py-6">
    <div class="flex">
      <div class="w-full absolute md:bg-transparent bg-green-100 md:relative md:w-1/4 pr-6">
        <Sidebar />
      </div>
      <div class="w-full md:w-3/4">
        <div class="w-full p-3 mb-10 border-2 border-dashed shadow-sm rounded-2xl border-green-100 ">
          <img v-if="category.image" :src="$axios.defaults.baseURL + 'storage/uploads/' + category.image" alt="" class="w-auto mx-full rounded-2xl" >

          <img v-else class="w-auto mx-full rounded-2xl" src="~/assets/img/cover.png" alt="Thanks" />

          <!-- {{ category }} -->
        </div>

        <div class="md:flex-row flex-col justify-between items-center mb-8">
          <h3 class="text-center text-3xl mb-2">{{ category.name }}</h3>
          <!-- <h3 class="md:text-left text-center text-3xl mb-2">You select Category id = {{ this.categoryId }} </h3> -->
          
        </div>

        <div v-if="this.categoryId" class="flex flex-wrap ">
          <div v-if="load" class="text-xl my-3 text-red-400 font-medium text-center "> Loading ... .. .</div>

          <div v-for="product in cat_product_list.data" :key="product.id" class="w-1/2 md:w-1/3 px-4 mb-10">

            <div class="single-bs-product">
              <div class="h-80  relative mb-6">
                <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                  <img v-if="product.image" :src="$axios.defaults.baseURL + 'storage/uploads/' + product.image" alt="" class="mx-auto w-auto" >
                  <img v-else class="mx-auto w-auto" src="~/assets/img/carousel-img-1.png" alt="Workflow" />
                </div>

                <div class="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center">
                  <div class="bg-black absolute h-full w-full opacity-60"></div>
                  <nuxt-link :to="`/productDetails/?id=${product.id}`" class=" absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center">Details
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </nuxt-link>
                  
        <div v-if="!matched" class="relative z-10">
          <button @click.prevent="addProductToCart(product)" class=" text-white text-2xl">Add to Card</button>
        </div>

                </div>
              </div>

              <h4 class="text-xl mb-3">{{ product.name }}</h4>
              <p><span class="font-medium bs-dark-orange-color">$ {{ product.price }} </span> <del
                  class="text-gray-400">${{ product.sell_price }}</del></p>

            </div>
          </div>

        </div>

        <div v-else class="flex flex-wrap ">

          
          <div v-for="cat in cat_slider_list " :key="cat.id" class="cat-item w-full my-2 md:w-1/3 px-2 md:px-6">
            <div class="category flex flex-col-reverse md:flex-row p-6 rounded-xl">
              <div class="w-full md:w-2/3">
                <h3 class="font-size-24 leading-tight font-semibold mb-10">{{ cat.name }}</h3>
                <nuxt-link :to="`/category/?id=${cat.id}`" class="round-link "><img src="~/assets/img/arrow-right.png" alt=""></nuxt-link>

              </div>
              <div class="w-full md:w-1/3 flex justify-end">
                <img v-if="cat.image" :src="$axios.defaults.baseURL + 'storage/uploads/' + cat.image" :alt="cat.image" width="120">
                <img v-else src="~/assets/img/fresh-fruit.png" alt="">
              </div>
            </div>
          </div>


        </div>






        <div class="text-center mb-10">
          <pagination v-model="page" :records="total" :per-page="per_page" @paginate="getCatProductData"></pagination>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "../components/Sidebar";
  import SingleProductBox from "../components/SingleProductBox";
  export default {
    head: {
      title: "Show Category",
    },
    name: "category",
    components: {
      SingleProductBox,
      Sidebar
    },
    data() {
      return {
        cat_product_list: {},
        cat_slider_list: {},
        page: 1,
        data: [],
        per_page: 0,
        total: 0,
        categoryId: "",
        category: "",
      }
    },

    created: function () {
      // this.getData();
      this.getCatProductData();
      this.getCatData();
      this.getCatSliderData();
    },

    methods: {

      async getCatProductData(page = 1) {
        let categoryId = this.$route.query.id;
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-cat-product/'+categoryId+'?page='+page)
        this.cat_product_list = r.data;
        this.total = r.data.total;

        this.per_page = r.data.per_page;
        this.load = false;

        this.categoryId = categoryId;

      },

      async getCatData(page = 1) {
        let categoryId = this.$route.query.id;
        this.load = true;
        let r = await this.$axios.$get('/api/all/get/'+categoryId+'?page='+page)
        
          // let catData = r ? JSON.parse(r) : r;
        
        this.category = r;
        this.load = false;
      },
      
      // for Category Slider Show data
      async getCatSliderData() {
        this.load = true;
        let r = await this.$axios.$get('/api/all/client-categories')
        this.cat_slider_list = r.data;
        this.load = false;
      },

      
      addProductToCart(ss) {
        // this.addProductToCart(ss);
        this.$store.dispatch('products/addProductToCart', ss)
        localStorage.setItem("products:cart", JSON.stringify(this.cart))
      },
      

    },
    watch: {
      '$route.query': '$fetch'
    },
    async fetch() {
      // Called also on query changes
      this.getCatProductData();
      this.getCatData();
    },

    mounted() {
      //
    },


  }

</script>

<style scoped>

.cat-item:nth-child(even) .category {
    background: #fff0dc;
  }

  .cat-item:nth-child(odd) .category {
    background: #ddf1d6;
  }

</style>
