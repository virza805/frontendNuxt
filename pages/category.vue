<template>
  <div class="container py-6">
    <div class="flex">
      <div class="w-full absolute md:bg-transparent bg-green-100 md:relative md:w-1/4 pr-6">
        <Sidebar/>
      </div>
      <div class="w-full md:w-3/4">
        <div class="w-full p-3 mb-10 border-2 border-dashed shadow-sm rounded-2xl border-green-100 ">
          <img class="w-full mx-auto rounded-2xl" src="~/assets/img/cover.jpg" alt="Thanks" />
        </div>

        <div class="md:flex-row flex-col justify-between items-center mb-8">
          <h3 class="md:text-left text-center text-3xl mb-2">Category heading</h3>
          <div class="min-w-max flex items-center">
            <div class="text-sm mr-6"><b>20</b> Products Found</div>
            <select name="" id="">
              <option value="">Default sorting</option>
              <option value="">Sort by price</option>
              <option value="">Sort by discount</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap ">
          <div v-for="item in 6" :key="item.id" class="w-1/2 md:w-1/3 px-4 mb-10">
            <SingleProductBox :product="item"/>
          </div>
        </div>

        <div class="text-center mb-10">
          <button class="bs-button">Load more || Show number pagination </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import SingleProductBox from "../components/SingleProductBox";
export default {
  head: {
    title: "Category",
  },
  name: "category",
  components: {SingleProductBox, Sidebar}
}
</script>

<style scoped>

</style>
