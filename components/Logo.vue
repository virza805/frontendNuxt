<template>
  <nuxt-link to="/" class="flex md:font-size-32 text-xl font-medium items-center">
    <img v-if="logo_data.logo" width="80" :src="$axios.defaults.baseURL + 'storage/uploads/' + logo_data.logo" alt="" class="mr-3">
    <img v-else width="80" class="mr-3" src="~/assets/img/logo.png" alt="">
    Bengal shop
  </nuxt-link>
</template>

<script>
  export default {
    name: "Logo",
    data() {
      return {
	      data: [],
        logo_data: {},
        load: false,
      }
    },
    created: function(){
      this.getLogo();
    },

    methods: {
      async getLogo() {
        // this.load = true;
        let r = await this.$axios.$get('/api/all/client-footer')
        this.logo_data = r.data;

        // this.load = false;
      }
    },
  }

</script>

<style>

</style>
