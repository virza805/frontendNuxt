<template>
  <div>
    <Header />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

export default {
  name: 'default',
  components: { Header, Footer },
}
</script>
