<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <!-- <img class="mx-auto h-12 w-auto" src="~/assets/img/virzaOk.gif" alt="Workflow" /> -->
        <Tanvir />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-yellow-600">Add Product Data</h2>

      </div>
      <form
      class="mt-8 space-y-6"
      action="#"
      @submit.prevent="handleSubmit"
      method="POST"
      enctype="multipart/form-data"
      >

        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <form-input

            label="name"
            v-model="form.name"
            :helperText="errorMsg('name')"
            :hasError="hasError('name')"
            placeholder="name"
          />
          <form-input

            label="category_id"
            v-model="form.category_id"
            :helperText="errorMsg('category_id')"
            :hasError="hasError('category_id')"
            placeholder="category_id"
          />

          <form-input
            type="file"
            label="image"
            v-model="form.image"
            :helperText="errorMsg('image')"
            :hasError="hasError('image')"
            placeholder="image"
          />
          <form-input

            label="price"
            v-model="form.price"
            :helperText="errorMsg('price')"
            :hasError="hasError('price')"
            placeholder="Enter price text"
          />
          <form-input

            label="sell_price"
            v-model="form.sell_price"
            :helperText="errorMsg('sell_price')"
            :hasError="hasError('sell_price')"
            placeholder="Enter sell_price text"
          />
          <form-input
            label="Product Tag"
            v-model="form.tag"
            :helperText="errorMsg('tag')"
            :hasError="hasError('tag')"
            placeholder="Enter Product Tag"
          />
          <form-textarea

            label="Description"
            v-model="form.description"
            :helperText="errorMsg('description')"
            :hasError="hasError('description')"
            placeholder="Enter text here..."
            rows="4"
            cols="20"
          ></form-textarea>
        </div>

        <div>
          <form-button :loading="loading">Add New Product</form-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import form from '../mixins/form';
import Input from '../../components/Form/Input.vue';
export default {
    // middleware: ['auth'],

    middleware: 'auth',
    layout: 'backend',
    head: {
        name: "Add Product",
    },
    components: { Input },
    mixins: [form],

    data() {
      return{
        form:{
          name: "",
          category_id: "",
          description: "",
          tag: "",
          price: "",
          sell_price: "",
          image: "",
        },
        errors: {},
        loading: false,
      };
    },

    methods: {
      // From submit async await
     async handleSubmit() {
        // api call
        try {
          this.loading = true;
          const res = await this.$axios.$post('/api/user/product/store', this.form)

          console.log(res);
          this.loading = false;

          // toast massage show

          this.$store.commit("toaster/fire", {
            text: "Successfully created product data.",
          });

          this.$router.push("/backend/showProduct");

        } catch (e) {
          // console.log(e.response.data);

          // toast massage show

          this.$store.commit("toaster/fire", {
            text: e.response.data.err_message,
            type: "error",
          });

          this.errors = e.response.data?.data || {};
          this.loading = false;

        }

      },


    }
};
</script>

<style scoped>

</style>

