<template>
  <span>
    <b class="text-green-600 " v-if=" $auth.user.role == 1">Admin</b>
    <b class="text-green-600 " v-if=" $auth.user.role == 2"> Manager</b>
    <b class="text-green-600 " v-if=" $auth.user.role == 3"> Editor</b>
    <b class="text-green-600 " v-if=" $auth.user.role == 4"> User</b>
  </span>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
