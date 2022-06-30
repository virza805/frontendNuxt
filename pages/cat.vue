<template>
  <div class="container py-6">
    <div class="flex">
      <div class="w-full absolute md:bg-transparent bg-green-100 md:relative md:w-1/4 pr-6">
        <Sidebar/>
      </div>
      <div class="w-full md:w-3/4">
        <div class="w-full p-3 mb-10 border-2 border-dashed shadow-sm rounded-2xl border-green-100 ">
          <img class="w-full mx-auto rounded-2xl" src="~/assets/img/cover.jpg" alt="Thanks" />
        </div>

        <div class="md:flex-row flex-col justify-between items-center mb-8">
          <h3 class="md:text-left text-center text-3xl mb-2">Category heading</h3>
          <div class="min-w-max flex items-center">
            <div class="text-sm mr-6"><b>20</b> Products Found</div>
            <select name="" id="">
              <option value="">Default sorting</option>
              <option value="">Sort by price</option>
              <option value="">Sort by discount</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap ">
          <div class="w-1/2 md:w-1/3 px-4 mb-10">
          <!-- <div v-for="product in cat_product_list" :key="product.id" class="w-1/2 md:w-1/3 px-4 mb-10"> -->

          <div class="single-bs-product">
            <div class="h-80  relative mb-6">
              <div class="h-full bg-gray-50 flex justify-center items-center p-4">
                <img class="mx-auto h-12 w-auto" src="~/assets/img/carousel-img-1.png" alt="Workflow" />
              </div>

              <div class="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center">
                <div class="bg-black absolute h-full w-full opacity-60"></div>
                <button @click.prevent="productDetails" class=" absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <!-- <div v-if="!matched" class="relative z-10">
                  <button @click.prevent="addToCart(product, 'plus')" class=" text-white text-2xl">Add to Card</button>
                </div>


                <div v-if="matched" class=" relative z-10">
                  <div class="flex justify-center items-center text-4xl text-white mb-8">
                    <button @click.prevent="addToCart(product, 'minus')" class="h-12 w-12 border border-white rounded-full">-</button>
                    <span class="mx-6">{{ quantity }}</span>
                    <button @click.prevent="addToCart(product, 'plus')" class="h-12 w-12 border border-white rounded-full">+</button>
                  </div>
                </div> -->

              </div>
            </div>

            <!-- <h4 class="text-xl mb-3">{{ product.name }}</h4> -->
            <h4 class="text-xl mb-3"> product.name </h4>
            <p><span class="font-medium bs-dark-orange-color">$ 8 </span> <del class="text-gray-400">$9</del></p>

          </div>
          </div>
        </div>

        <div class="text-center mb-10">
          <button class="bs-button">Load more || Show number pagination </button>
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
  components: {SingleProductBox, Sidebar},
  data() {
    return {
      cat_product_list: {},
    }
  },

    created: function(){
      // this.getData();
      this.getCatProductData();
      // this.getSliderData();
    },

  methods: {

      async getCatProductData(){
        let editTaskId = this.$route.query.id;

        this.load = true;
        let r = await this.$axios.$get('/api/all/client-cat-product/'+editTaskId)
        this.cat_product_list = r.data;
        this.load = false;
        // let editData = await this.$axios.$get('/api/user/product/get/'+editTaskId)

        // this.form.name = editData.name;
        // this.form.category_id = editData.category_id;
        // this.form.description = editData.description;
        // this.form.tag = editData.tag;
        // this.form.price = editData.price;
        // this.form.sell_price = editData.sell_price;
        // this.form.image = editData.image;
        // this.form.stock = editData.stock;
        // this.form.status = editData.status;

      },
  }
}
</script>

<style scoped>

</style>
