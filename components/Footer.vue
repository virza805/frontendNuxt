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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nihil enim illum, omnis dicta itaque? Velit, eveniet odit? Laudantium praesentium consequuntur doloremque culpa ipsum non cupiditate delectus suscipit perspiciatis amet.
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
    <div class="w-1/5"><img src="~/assets/img/payments.png" alt=""></div>
    </div>
    <!-- <img src="~/assets/img/footer-last.png" alt=""> -->
    </div>

  </div>

  </div>
</template>

<script>
  export default {
    name: "Footer"
  }

</script>

<style scoped>

</style>
