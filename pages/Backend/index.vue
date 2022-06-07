<template>
  <div class="text-center my-12">
<h2 class="text-4xl">Wellcome {{ $auth.user.name }} </h2>
<p>Your a
              <b class="text-green-600 " v-if=" $auth.user.role == 1">Admin</b>
              <b class="text-green-600 " v-if=" $auth.user.role == 2"> Manager</b>
              <b class="text-green-600 " v-if=" $auth.user.role == 3"> Editor</b>
              <b class="text-green-600 " v-if=" $auth.user.role == 4"> User</b>
          </p>
    <div>
      <img class="mx-auto" src="~/assets/img/virzaOk.gif" alt="" />
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
