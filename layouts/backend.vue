<template >
  <div class="backend_layout_fixed">
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

            <!-- <div class="clock">
                <div id="clock">00:00:00</div>
            </div> -->

            <ul>
                <li class="fullScreen_on_off" id="fullScreen">
                    <button class="active_on" onclick="openFullscreen();"><img src="~/assets/img/maximize-2.svg" alt="maximize"></button>
                    <button class="active_off" onclick="closeFullscreen();"><img src="~/assets/img/minimize-2.svg" alt="minimize"></button>
                </li>
                <li>
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
            <!-- Sidebar user profile information the end-->
            <!-- <div class="sidebar">
                <ul class="left_sidebar">
                    <li class="  ">
                        <a href="#" class="dropdown-btn active"> Dashboard</a>
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
                        </ul>
                    </li>


                    <li class="  ">
                        <a href="#" class="dropdown-btn active">Tanjil</a>
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
            </div> -->

            <BackendClock></BackendClock>
            <!-- <div class="analock_clock" style="display: flex; justify-content: center;">
                <canvas id="canvas" width="130" height="130" style="text-align:center"></canvas>
            </div> -->
            <!-- sidebar menu the end -->
        </aside>

        <div class="backend_content_wrapper">
            <Nuxt />


        </div>

        <footer class="main-footer">
            <strong>Copyright <a href="https://vir-za.com">© 2022 Tanvir Md. Al Amin</a>.</strong> All rights reserved.

        </footer>


    </div>
  </div>
</template>
<script>
export default {
    head: {
    title: "Dashboard",
      script: [
        {
        type: 'text/javascript',
        src: "/js/backend_left_sidebar_menu.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
        },
        {
        type: 'text/javascript',
        src: "/js/backend_layout_full_hight.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
        },
        {
        type: 'text/javascript',
        src: "/js/backend_left_sidebar_on_off.js",
        body: true,
        async: true,
        crossorigin: "anonymous"
        },
      ],
    }

  }
</script>
<style scoped>

</style>
