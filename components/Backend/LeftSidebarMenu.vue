<template>
  <div class="sidebar">
    <ul class="left_sidebar">
      <li class="  ">
        <nuxtLink to="#" class="dropdown-btn active">Dashboard<img src="~/assets/img/chevron-down.png" alt=""></nuxtLink>

        <ul class="dropdown-container">
          <li class=" ">
            <nuxtLink to="/backend" > Dashboard </nuxtLink>
          </li>
          <li class=" ">
            <nuxt-link class="" to="/backend/profile">My Profile</nuxt-link>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v3</a>
          </li>
        </ul>
      </li>


      <li class="  ">
        <a href="#" class="dropdown-btn active">Tanjil 	&dArr;</a>
        <ul class="     dropdown-container">
          <li class=" ">
            <a href="#" class="  ">Dashboard v1</a>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v2</a>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v3</a>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v3</a>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v3</a>
          </li>
          <li class=" ">
            <a href="#" class="   ">Dashboard v3</a>
          </li>
        </ul>
      </li>

    </ul>
  </div>
</template>
<script>
  export default {
    head: {
      // script: [{
      //   type: 'text/javascript',
      //   src: "/js/backend_left_sidebar_menu.js",
      //   body: true,
      //   async: true,
      //   crossorigin: "anonymous"
      //   },
      // ],
    }

  }

</script>

<style scoped>

</style>
