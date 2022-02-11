<template>
  <div class="container">
    <div class="flex py-6">
      <div class="w-1/4 pr-6">
        <Sidebar />
      </div>
      <div class="w-3/4 pr-6">Category</div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar },
  name: "Category"
}
</script>

<style>

</style>
