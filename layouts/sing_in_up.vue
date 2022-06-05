<template>
  <div>
    <Toaster />
    <pre>
      {{ $auth.user }}
      {{ $auth.loggedIn }}
    </pre>
    <div class="flex justify-center" >
      <BackendDigitalClock></BackendDigitalClock>
    </div>

      <Nuxt />

      <BackendClock></BackendClock>
    <Footer />
  </div>
</template>
<script>
import Toaster from '../components/Toaster.vue';
export default {
    components: { Toaster }
}
</script>
<style scoped>

</style>
