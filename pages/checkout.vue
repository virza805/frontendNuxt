
<template>
  <div class="container py-20">
  <h2 class=" text-4xl text-red-500 font-bold text-center my-4">Checkout Page</h2>
    <table class="table-auto w-full">
      <thead>
      <tr>
        <th style="width: 30px" class="border px-4 py-2"></th>
        <th style="width: 50px" class="border px-4 py-2">Image</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th style="width: 150px" class="border px-4 py-2">Price</th>
        <th style="width: 150px" class="border px-4 py-2">Quantity</th>
        <th style="width: 150px" class="border px-4 py-2">Total</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in cart" :key="product.id" >
        <td class="border px-4 py-2">
          <button @click="remove(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
        <td class="border px-4 py-2">
          <img v-if="product.image" :src="'http://127.0.0.1:8000/storage/uploads/' + product.image" :alt="product.image" width="120">
          <img v-else src="~/assets/img/fresh-fruit.png" width="50" alt="">
        </td>
        <td class="border px-4 py-2">{{product.name}}</td>
        <td class="border px-4 py-2 text-center">${{product.price.toFixed(2)}}</td>
        <td class="border px-4 py-2 text-center">
          <div class="flex justify-center items-center">
            <button @click.prevent="minus(product)" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full mr-3 font-bold">-</button>

            {{product.quantity}}

            <button @click.prevent="plus(product)" class="bg-gray-50 h-6 w-6 flex justify-center items-center rounded-full ml-3 font-bold">+</button>
          </div>
        </td>
        <td class="border px-4 py-2 text-center">${{(product.quantity * product.price).toFixed(2)}}</td>
      </tr>

      <tr>
        <td class="border px-4 py-2 text-center text-right" colspan="5">Total</td>
        <td class="border px-4 py-2 text-center">${{ cartTotal }}</td>
      </tr>
      </tbody>
    </table>




    <form
      class="mt-8 space-y-6"
      action="#"
      @submit.prevent="handleSubmit"
      method="POST"
      enctype="multipart/form-data"
      id="order_form">

      <div class="rounded-md shadow-sm -space-y-px">
        
        <input type="hidden" :value="cartTotal" name="totall_price">
        <form-input 
          label="Address"
          v-model="form.address"
          :helperText="errorMsg('address')"
          :hasError="hasError('address')"
          placeholder="address"
          name="address"
        />
        <form-input 
          label="Payment method"
          v-model="form.payment_method"
          :helperText="errorMsg('payment_method')"
          :hasError="hasError('payment_method')"
          placeholder="stripeCard"
          name="payment_method"
          class="mb-4"
        />

        <div class="flex my-4 mt-8">
          <div class="w-full">
            <form-input 
              label="Card Number [4242424242424242]"
              type="number"
              v-model="form.card_no"
              :helperText="errorMsg('card_no')"
              :hasError="hasError('card_no')"
              placeholder="4242424242424242"
              name="card_no"
            />
          </div>

          <div class="min-w-max ml-4">
            <form-input 
              label="Expiry month/year"
              v-model="form.card_expiry_date"
              :helperText="errorMsg('card_expiry_date')"
              :hasError="hasError('card_expiry_date')"
              placeholder="12/25"
              name="card_expiry_date"
            />
          </div>

          <div class="min-w-max ml-4">
            <form-input 
              label="Card ccv"
              type="number"
              v-model="form.card_ccv"
              :helperText="errorMsg('card_ccv')"
              :hasError="hasError('card_ccv')"
              placeholder="564"
              name="card_ccv"
            />
            
          </div>

        </div>


      </div>


      <div class="my-8 flex justify-between">
        <nuxt-link to="/carts" class=" bg-green-500 text-white py-2 px-8">Go to Cart</nuxt-link>
        <form-button :loading="loading">Checkout</form-button>
      </div>
      
    </form>
    <!-- <nuxt-link to="">Proceed to checkout</nuxt-link> -->
    
    
  </div>
</template>

<script>

import form from './mixins/form';
import Input from '../components/Form/Input.vue';
import { mapGetters, mapState, mapMutations } from 'vuex';
export default {
  head: {
    title: "Checkout",
  },
  middleware: 'auth',
  name: "Checkout",
  components: { Input },
  mixins: [form],
  data() {
    return {
      products: [],
      total: 0,
      form:{
        payment_method: "",
        address: "",
        totall_price: "",
        card_no: "",
        card_expiry_date: "",
        card_ccv: "",
      },
      errors: {},
      loading: false,
    }
  },
  computed:{
      ...mapState('products', ['cart','products']),
      ...mapGetters('products', ['cartTotal'])
  },
  methods: {
    ...mapMutations('products', ['removeProductToCart', 'incrementItemQuantity', 'decrementItemQuantity', 'emptyCart']),
    
    // From submit async await
    async handleSubmit() {
      let form_data = new FormData(document.getElementById("order_form"));
      // let cats = JSON.stringify(this.form.category_id);
      // let cats = this.form.category_id.join(",");
      let cats = JSON.stringify(this.cart);
      

      form_data.append("cart_product", cats);
      // api call
      try {
        this.loading = true;
        const res = await this.$axios.$post('/api/user/order/store', form_data)

        console.log(res);
        this.loading = false;

        // toast massage show

        this.$store.commit("toaster/fire", {
          text: "Successfully Checkout Card Product.",
        });
        this.emptyCart();
        localStorage.setItem("products:cart", JSON.stringify(this.cart));

        this.$router.push("/");
        // this.$router.push("/backend/showProduct");

      } catch (e) {
        // console.log(e.response);

        // toast massage show
        this.$store.commit("toaster/fire", {
          text: e.response.data.err_message,
          type: "error",
        });

        this.errors = e.response.data?.data|| {};
        this.loading = false;

      }

    },

    remove(id){
      this.removeProductToCart(id) // delete from state | mapMutations requerd
      localStorage.setItem("products:cart", JSON.stringify(this.cart))

    },
    minus(item){
      this.decrementItemQuantity(item)
      localStorage.setItem("products:cart", JSON.stringify(this.cart))
    },
    plus(item){
      this.incrementItemQuantity(item)
      localStorage.setItem("products:cart", JSON.stringify(this.cart))
    },

    
  },
  mounted() {
    
  },

  // info@gjafabref.is

}
</script>

<style scoped>

</style>


