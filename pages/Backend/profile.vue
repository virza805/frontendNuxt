<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="bg-gray-50">
      <div class=" ">
        <div class="w-full">
          <img src="~/assets/img/cover.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
<div class="basis-1/4">
    <p>Name: </p>
    <p>Email: </p>
  </div>
  <div class="basis-1/2">
    <div class="rounded-md shadow">
            <img src="~/assets/img/Thanks.jpg" alt="Admin Img" style="opacity:1; width: 150px;">
          </div>
  </div>
  <div class="basis-1/4">

          <div class="rounded-md shadow border">
.services_text .box-body {
    color: #5f5e5e;
}
            <p>Name: </p>
            <p>Email: </p>
          </div>
  </div>



      </div>
    </div>

  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    layout: 'backend',

  }

</script>

<style scoped>

</style>
