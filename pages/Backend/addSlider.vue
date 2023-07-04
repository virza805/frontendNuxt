<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="~/assets/img/virzaOk.gif" alt="Workflow" />
        <Tanvir />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-yellow-600">Add Hero Slider & Buy-1 Get-1 Data</h2>

      </div>
      <form
      class="mt-8 space-y-6"
      action="#"
      @submit.prevent="handleSubmit"
      method="POST"
      enctype="multipart/form-data"
      id="slider_buy_get"
      >
      
        <div class="rounded-md shadow-sm -space-y-px">
          <form-input

            label="Title"
            v-model="form.title"
            :helperText="errorMsg('title')"
            :hasError="hasError('title')"
            placeholder="title"
            name="title"
          />
          <form-input

            label="Sub Title"
            v-model="form.sub"
            :helperText="errorMsg('sub')"
            :hasError="hasError('sub')"
            placeholder="Sub title"
            name="sub"
          />

          <form-input
            type="file"
            label="image"
            v-model="form.image"
            :helperText="errorMsg('image')"
            :hasError="hasError('image')"
            placeholder="image"
            name="image"
          />
          <form-input

            label="Button"
            v-model="form.btn"
            :helperText="errorMsg('btn')"
            :hasError="hasError('btn')"
            placeholder="Enter button text"
            name="btn"
          />
          <form-input
            label="Button link"
            v-model="form.btn_link"
            :helperText="errorMsg('btn_link')"
            :hasError="hasError('btn_link')"
            placeholder="Enter button link"
            name="btn_link"
          />
          <form-textarea

            label="Description"
            v-model="form.des"
            :helperText="errorMsg('des')"
            :hasError="hasError('des')"
            placeholder="Enter text here..."
            rows="4"
            cols="20"
            name="des"
          ></form-textarea>
        </div>

        <div>
          <form-button :loading="loading">+ Add Now</form-button>
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
    components: { Input },
    mixins: [form],

    data() {
      return{
        form:{
          title: "",
          sub: "",
          des: "",
          image: "",
          btn: "",
          btn_link: "",
        },
        errors: {},
        loading: false,
      };
    },

    methods: {
      // From submit async await
    //  async handleSubmit() {
    //     // api call
    //     try {
    //       this.loading = true;
    //       const res = await this.$axios.$post('/api/user/slider/store', this.form)
    //       this.loading = false;

    //       // toast massage show
    //       this.$store.commit("toaster/fire", {
    //         text: "Successfully created slider data.",
    //       });
    //       this.$router.push("/backend/showSlider");

    //     } catch (e) {
    //       // toast massage show
    //       this.$store.commit("toaster/fire", {
    //         text: e.response.data.err_message,
    //         type: "error",
    //       });

    //       this.errors = e.response.data?.data || {};
    //       this.loading = false;

    //     }
    //   },
      
     async handleSubmit() {
      let form_data = new FormData(document.getElementById("slider_buy_get"));
        // api call
        try {
          this.loading = true;
          const res = await this.$axios.$post('/api/user/slider/store', form_data)
          this.loading = false;

          // toast massage show
          this.$store.commit("toaster/fire", {
            text: "Successfully created slider data.",
          });
          this.$router.push("/backend/showSlider");

        } catch (e) {
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

