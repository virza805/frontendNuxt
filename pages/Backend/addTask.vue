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
        <img class="mx-auto h-12 w-auto" src="~/assets/img/virzaOk.gif" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-yellow-600">Add Task</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
        </p>
      </div>
      <form
      class="mt-8 space-y-6"
      action="#"
      @submit.prevent="handleSubmit"
       method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <form-input

            label="Title"
            v-model="form.email"
            :helperText="errorMsg('email')"
            :hasError="hasError('email')"
            placeholder="Title"
          />
          <form-input

            label="Description"
            v-model="form.email"
            :helperText="errorMsg('email')"
            :hasError="hasError('email')"
            placeholder="Description"
          />
          <form-input

            label="Date"
            v-model="form.email"
            :helperText="errorMsg('email')"
            :hasError="hasError('email')"
            placeholder="Date"
          />
          <form-input
            type="date"
            label="End Date"
            v-model="form.password"
            :helperText="errorMsg('password')"
            :hasError="hasError('password')"
            placeholder="End Date"
          />

        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <nuxt-link to="/auth/forgot-password" class="font-medium text-green-600 hover:text-green-800"> Forgot your password? </nuxt-link>
          </div>
        </div>

        <div>
          <form-button :loading="loading">Submit Now</form-button>
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
        title: "Add Task",
    },
    // layout: "sing_in_up",
    components: { Input },
    mixins: [form],

    data() {
      return{
        form:{
          email: "",
          password: "",
        },
        loading: false,
      };
    },

    methods: {
      // From submit async await
     async handleSubmit() {
        // api call
        try {
          this.loading = true;
          await this.$auth.loginWith('local', { data: this.form });

          this.loading = false;

          // toast massage show
          this.$store.commit("toaster/fire", {
            text: "Successfully logged in",
          });

          // this.$router.push("/backend");

        } catch (e) {

          this.$store.commit("toaster/fire", {
            text: e.response.data.message,
            type: "error",
          });

          this.errors = e.response.data?.errors || {};
          this.loading = false;

        }

      },


    }
};
</script>

<style scoped>

</style>

