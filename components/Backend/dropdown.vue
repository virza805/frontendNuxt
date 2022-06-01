<template>
  <div class="dropdown">
    <a href="#" class="drop_btn drop_con">Dropdown Title</a>
    <ul class="dropdown-con">
      <li class=" ">
        <a href="#" class=" ">Dropdown Content v1</a>
      </li>
      <li class=" ">
        <a href="#" class=" ">Dropdown Content v2</a>
      </li>
      <li class=" ">
        <a href="#" class=" ">Dropdown Content v3</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    head: {
      script: [{
        type: 'text/javascript',
        src: "/js/dropdown.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
      }, ],
    }

  }

</script>

<style scoped>

</style>
