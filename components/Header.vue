<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="container">
      <div class="flex justify-between items-center py-6">
        <Logo />

        <div class="w-96">
          <div class="border border-gray-100 p-1 flex rounded-full items-center">
            <div class="min-w-max px-3">
              <img src="~/assets/img/search.png" alt="">
            </div>
            <input type="search" class="w-full px-3 pxy-1 focus:outline-none" placeholder="Search here ...">
            <button class="bg-gray bs-button-bg px-6 rounded-full py-2 text-white" type="submit">Search</button>
          </div>
        </div>

        <div class="min-w-max flex items-center">
          <nuxt-link to="/wishlist"><span class="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center"><img src="~/assets/img/heart.png" alt=""></span></nuxt-link>

          <nuxt-link class="relative mx-4" to="/cart"><span class="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center"><img src="~/assets/img/u_shopping-bag.png" alt=""></span> <span class="absolute bg-red-600 px-1 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">
            {{ count }}

          </span>
          </nuxt-link>

          <nuxt-link to="/my-account" class="flex items-center"><span class="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center"><img src="~/assets/img/user.png" alt=""></span> <span>Account </span></nuxt-link>

          <nuxt-link to="/auth/register"> | Sing Up | </nuxt-link>
          <NuxtLink to="/auth/login"> Login </NuxtLink>
        </div>

      </div>

      <div class="flex items-center">
        <div v-click-outside="menuClose" class="w-96 relative">
          <div @click.prevent="menuClick" class="bs-dark-green-bg relative z-20 flex rounded-full px-4 py-2 cursor-pointer">
            <div class="min-w-max">
              <img src="~/assets/img/menu-right.png" alt="">
            </div>
            <div class="w-full text-center px-6 text-white">
              All Categories
            </div>
            <div class="min-w-max">
              <img src="~/assets/img/chevron-down.png" alt="">
            </div>
          </div>

          <div  v-bind:class="allCategoryMenu ? 'block visible' : 'hidden visible' " class="absolute bs-dark-green-bg z-10 w-full -mt-5 pt-6 pb-4 rounded-b-2xl">
            <ul>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Fruits</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Vegetables</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Category</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
              <li>
                <nuxt-link class="block py-2 px-4 text-white hover:text-black" to="/">Lorem ispum</nuxt-link>
              </li>
            </ul>
          </div>
        </div>




        <div class="w-full">
          <ul class="flex justify-center">
            <li>
              <nuxt-link class="p-4" to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link class="p-4" to="/category">Categories</nuxt-link>
            </li>
            <li>
              <nuxt-link class="p-4" to="/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link class="p-4" to="/contact">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link class="p-4" to="/faq">FAQs</nuxt-link>
            </li>
            <li>
              <nuxt-link class="p-4" to="/offers">Offers</nuxt-link>
            </li>
          </ul>
        </div>
        <nuxt-link to="/sp-offers" class="min-w-max bs-dark-orange-color flex">
          <img src="~/assets/img/u_percentage.png" class="mr-3" alt=""> Special Offers!
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
  export default {
    name: 'Header',
    components:{Logo},
    data() {
      return {
        allCategoryMenu: false,
        count: 0
      }
    },
    methods: {
      menuClick() {
        this.allCategoryMenu = !this.allCategoryMenu;
      },
      menuClose() {
        this.allCategoryMenu =  false
      },
      cartWatcher() {

      const getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));
      const getProductsStore = this.$store.getters["cart/getCart"];

      let cart = [];
      if(getProductsStore.length) {
        cart = getProductsStore;
      } else {
        cart = getProductsLocalStorage;
      }


      if(cart.length) {
        cart.forEach(item => {
          this.count = (this.count + item.quantity);

        });
      }


      }
    },
    mounted() {


      let getLocalStorageProducts = JSON.parse(localStorage.getItem('cart'));
      if(getLocalStorageProducts === null) {
        localStorage.setItem('cart', '[]');
      }
      // localStorage.setItem('cart', JSON.stringify([]))

      this.cartWatcher();
      this.$store.watch(
        () => {
          return this.$store.getters["cart/getCart"]
        },
        (val)=>{
          this.cartWatcher();
        },
        {
          deep:true
        }
      );

    }
  }

</script>
<style scoped>
  .hmenu {
    display: flex;
  }

</style>
