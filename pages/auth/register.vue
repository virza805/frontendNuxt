<template >
  <div class="mx-auto my-6" >
    <h2 class=" text-center text-yellow-600">Register Page</h2>
    <form
      action="#"
      @submit.prevent="handleSubmit"
      class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12"
    >
      <FormInput />
    </form>
  </div>
</template>
<script>
export default {

  head: {
    title: "Signup",
  },
  layout: 'sing_in_up'
}
</script>

<style scoped>

</style>
