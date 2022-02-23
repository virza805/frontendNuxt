<template>
  <div>
    <div class="container">
      <div class="flex -mx-4 mb-10">
        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/customer-support.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Support</h3>
            Contact us 24 hours
          </div>
        </div>
        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/authentic-products.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Products</h3>
            Contact us 24 hours
          </div>
        </div>
        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/secure-payment.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Cecure Payment</h3>
            Contact us 24 hours
          </div>
        </div>
        <div class="w-1/4 px-4 flex items-center">
          <div class="min-w-max mr-4">
            <img width="80" src="~/assets/img/best-price.png" alt="">
          </div>
          <div class="w-full">
            <h3 class="text-xl font-medium mb-2">Prices & Offers</h3>
            Contact us 24 hours
          </div>
        </div>
      </div><!-- end 1 -->

    </div>
    <div class="bg-gray-200 py-20">
      <div class="container">
        <div class="flex">
          <div class="w-3/5 pr-10">
            <Logo />
            <p class="my-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nihil enim illum, omnis dicta itaque?
              Velit, eveniet odit? Laudantium praesentium consequuntur doloremque culpa ipsum non cupiditate delectus
              suscipit perspiciatis amet.
            </p>
            <div class="flex">
              <a href="/" class="mr-4"><img src="~/assets/img/playstore.png" alt=""></a>
              <a href="/"><img src="~/assets/img/appstore.png" alt=""></a>
            </div>
          </div>
          <div class="w-1/5">
            <h3 class="text-2xl mb-6 pl-7">About Us</h3>
            <ul class="leading-loose">
              <li>
                <nuxt-link class="p-4" to="/">About Karte</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Career</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Contact</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Terms & Conditions</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Category</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="w-1/5">
            <h3 class="text-2xl mb-6 pl-7">Info</h3>
            <ul class="leading-loose">
              <li>
                <nuxt-link class="p-4" to="/">Information</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Shopping</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Payment</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Return</nuxt-link>
              </li>
              <li>
                <nuxt-link class="p-4" to="/">Blog</nuxt-link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div class="container mt-6">
        <div class="flex items-center">
          <div class="w-1/5"><img src="~/assets/img/social.png" alt=""></div>
          <div class="w-3/5 text-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
          <div class="w-1/5">
            <img src="~/assets/img/payments.png" alt="">
          </div>
        </div>
        <!-- <img src="~/assets/img/footer-last.png" alt=""> -->
      </div>
    </div>


<!-- Product details modal StartNow -->
    <div v-if="modal" class="fixed w-full h-full min-h-screen z-30 top-0 left-0">
      <div @click.prevent="modalClose" class="absolute bg-black opacity-60 h-full w-full top-0 left-0"></div>
      <div class="bs-modal-body bg-white rounded-2xl p-8 relative mx-auto z-30 my-10 relative">
        <svg @click.prevent="modalClose" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute right-5 top-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>


        <div class="flex -mx-8">
          <div class="w-1/2 px-8">
            <img :src="product.image"/>
          </div>
          <div class="w-1/2 px-8">
            <p class="text-sm mb-3"><span class="uppercase text-gray-400 pr-6">Status</span> <span class="bs-dark-green-color">In Stock</span></p>
            <!-- <h3 class="text-2xl">{{product}}</h3> -->
            <h3 class="text-2xl">{{product.name}}</h3>
            <p class="text-xs text-gray-400 mb-4 mt-2"><b>7</b> items available.</p>
            <p class="text-2xl font-bold">${{ product.sale }} <del class="font-normal text-gray-400">${{ product.price }}</del></p>
            <div class="flex my-6">
              <input type="number" class="w-10 border border-gray-200 mr-5 text-center" value="1">
              <button class="bs-button">Add to cart</button>
            </div>

            <div class="flex border-b border-gray-200 justify-between text-sm pb-3 mb-8">
              <p class="flex items-center"><img src="~/assets/img/heart.png" class="w-4 mr-3" alt=""> Add to favourites</p>
              <p class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </p>
            </div>

            <div class="text-xs leading-loose">
              <p><span class="uppercase text-gray-400 w-20 inline-block">Sku:</span>
              {{ product.sku }}
              </p>
              <p><span class="uppercase text-gray-400 w-20 inline-block">category:</span>

                <span v-for="item in product.categories" ><nuxt-link class="bs-dark-green-color" :to="'category/' + item.name">{{item.name}}</nuxt-link><span class="comma">, </span></span>
              </p>

              <p><span class="uppercase text-gray-400 w-20 inline-block">tags:</span>

                <span v-for="item in product.tags" ><nuxt-link class="bs-dark-green-color" :to="'category/' + item.name">{{item.name}}</nuxt-link><span class="comma">, </span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- The End Product details modal -->

  </div>
</template>

<script>
import Logo from "./Logo.vue";
  export default {
    name: "Footer",
    components: {Logo},
    data() {
      return {
        modal: false,
        product: ''
      }
    },
    methods: {
      modalClose() {
        this.$store.dispatch("product-details-modal/resetModal");
      }
    },
    mounted() {
      this.$store.watch(
        () => {
          return this.$store.getters["product-details-modal/getModal"]
        },
        (val)=>{
          this.modal = val.modal
          this.product = val.product
        },
        {
          deep:true
        }
      );
    }



  }

</script>

<style scoped>

</style>
