<template>
  <div class="backend_layout_fixed">
    <Toaster />
    <div id="backendWrapper" class="left_sidebar_show">
      <nav class="backend_menu">
        <ul>
          <li>
            <span onclick="backendSidebarOnOffFunction()">
              <img class="left_arrow" src="~/assets/img/arrow-left.svg" alt="">
              <img class="right_arrow" src="~/assets/img/arrow-right.svg" alt="">
            </span>
          </li>
          <!-- <li><span onclick="backendSidebarOnOffFunction()" id="togglebutton">Show/hide</span></li> -->
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        <BackendDigitalClock></BackendDigitalClock>

        <ul>
          <li class="fullScreen_on_off" id="fullScreen">
            <button class="active_on" onclick="openFullscreen();"><img src="~/assets/img/maximize-2.svg"
                alt="maximize"></button>
            <button class="active_off" onclick="closeFullscreen();"><img src="~/assets/img/minimize-2.svg"
                alt="minimize"></button>
          </li>
          <li>
            <button @click="handleLogout"
              class="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">Logout</button>
          </li>
          <li>
            <NuxtLink to="/auth/login"
              class="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center"><img
                src="~/assets/img/log-out.svg" alt=""></NuxtLink>
          </li>
          <li>
            <a class="backendLogo" href="#"><img src="~/assets/img/virzaOk.gif" alt=""></a>
          </li>
        </ul>
      </nav>

      <aside class="main_sidebar">
        <a href="#">
          <div class="profile_inf">
            <img src="~/assets/img/Tanvir Md. Al-Amin.jpg" alt="Admin Img" style="opacity:1; width: 70px;">
            <div class="user_con">
              <h3><span style="font-size:10px ;">User role</span> Admin</h3>
              <h5>Tanvir</h5>
            </div>
          </div>
        </a>
        <BackendLeftSidebarMenu></BackendLeftSidebarMenu>

        <BackendClock></BackendClock>

        <!-- sidebar menu the end -->
      </aside>

      <div class="backend_content_wrapper">

    <pre>
      <!-- {{ user }} -->
      {{ this.$auth.user }}
      {{ $auth.user }}
      {{ $auth.loggedIn }}
    </pre>
        <Nuxt />

      </div>

      <footer class="main-footer">
        <strong>Copyright <a href="https://vir-za.com">© 2022 Tanvir Md. Al Amin</a>.</strong> All rights reserved.

      </footer>


    </div>
  </div>
</template>
<script>
import form from '../pages/mixins/form';
import Toaster from '../components/Toaster.vue';
  export default {
    head: {
        title: "Dashboard",
        script: [{
                type: "text/javascript",
                src: "/js/backend_left_sidebar_menu.js",
                body: true,
                async: true,
                crossorigin: "anonymous"
            }, {
                type: "text/javascript",
                src: "/js/backend_layout_full_hight.js",
                body: true,
                async: true,
                crossorigin: "anonymous"
            }, {
                type: "text/javascript",
                src: "/js/backend_left_sidebar_on_off.js",
                body: true,
                async: true,
                crossorigin: "anonymous"
            },
        ],
    },
    data() {
      return {
        loading: false,
      }
    },
    mixins: [form],
    components: { Toaster },
methods: {
 async handleLogout() {
     try {
       this.loading = true;
       await this.$axios.get("api/user/logout");

       this.errors = errors.response.data?.errors || {};
          this.$store.commit("toaster/fire", {
            text: errors.response.data.message,
        });

       this.loading = false;
     } catch (error) {
       this.loading = false;
       console.log(error.response.data);
       this.errors = errors.response.data?.errors || {};

          this.$store.commit("toaster/fire", {
            text: errors.response.data.message,
            type: "error",
          });
     }

  }
},

}
</script>
<style scoped>

</style>
