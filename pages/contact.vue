<template>

   <div>
      <h2 class=" text-4xl mt-10 text-red-500 font-bold text-center">Contact With me</h2>
    <div class="min-h-full flex items-center justify-center py-12 lg:px-4 sm:px-6 lg:px-8 mb-20 ">

      <div class="flex flex-wrap flex-col-reverse lg:flex-row ">

        <div class="w-full lg:w-1/2 p-3 mb-10 border-2 border-dashed rounded-sm border-primary -ml-2 mr-2">
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.662227186117!2d90.35932259999997!3d23.77122070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1654852110225!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>

        <div class="w-full lg:w-1/2 p-3 mb-10 border-2 border-dashed rounded-sm border-primary -mr-2 ml-2">
          <form
      class="mt-8 space-y-6"
      action="#"
      @submit.prevent="handleSubmit"
       method="POST">
        <input type="hidden" name="remember" value="true" />
        <FormInput
          label="Name"
          v-model="form.name"
          :helperText="errorMsg('name')"
          :hasError="hasError('name')"
         />
        <form-input
          type="email"
          label="Email Address"
          v-model="form.email"
          :helperText="errorMsg('email')"
          :hasError="hasError('email')"
       />
      <form-input
        type="password"
        label="Password"
        v-model="form.password"
        :helperText="errorMsg('password')"
        :hasError="hasError('password')"
       />
      <form-input
        type="password"
        label="Confirm Password"
        v-model="form.password_confirmation"
        :helperText="errorMsg('password_confirmation')"
        :hasError="hasError('password_confirmation')"
        class="mb-10 "
       />


        <!-- <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <nuxt-link to="/auth/login" class="font-medium text-green-600 hover:text-green-800"> Go to login </nuxt-link>
          </div>
        </div> -->



        <div>
          <form-button :loading="loading">Submit</form-button>

        </div>
      </form>


        </div>


      </div>
    </div>

  </div>
</template>


<script>
import form from '../pages/mixins/form';
import Input from '../components/Form/Input.vue';
export default {
    // middleware: 'guest',
    // layout: "sing_in_up",
    head: {
        title: "Contact",
    },
    components: { Input },
    mixins: [form],

    data() {
      return{
        form:{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        },
        errors: {},
        loading: false,
      };
    },

    methods: {
      // From submit same work by then & catch
     async handleSubmit() {
        // api call
        try {
          this.loading = true;
          const res = await this.$axios.$post('/api/user/regis', this.form)
          this.loading = false;

          // toast massage show

          this.$store.commit("toaster/fire", {
            text: "Successfully created a new account. please check your email to verify your account.",
          });

          this.$router.push("/");

        } catch (e) {
          // console.log(e.response.data);

          // toast massage show

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

<style>

</style>
