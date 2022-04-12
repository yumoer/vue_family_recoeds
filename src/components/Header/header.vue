<template>
  <!-- ##### Header Area Start ##### -->
  <header class="header-area fadeInDown" data-wow-delay="0.2s">
    <div class="classy-nav-container light breakpoint-off">
      <div class="container">
        <!-- Classy Menu -->
        <nav class="classy-navbar light justify-content-between" id="dreamNav">
          <!-- Logo -->
          <a class="nav-brand light" href="#"
            ><img src="src/assets/img/core-img/logo.png" alt="logo" /> Robostam
          </a>

          <!-- Navbar Toggler -->
          <div class="classy-navbar-toggler demo">
            <span class="navbarToggler"
              ><span>22</span><span></span><span></span
            ></span>
          </div>

          <!-- Menu -->
          <div class="classy-menu">
            <!-- close btn -->
            <div class="classycloseIcon">
              <div class="cross-wrap">
                <span class="top"></span><span class="bottom"></span>
              </div>
            </div>

            <!-- Nav Start -->
            <div class="classynav">
              <ul id="nav">
                <li>
                  <a @click="goToPage('/')">Home</a>
<!--                  <ul class="dropdown">-->
<!--                    <li><a @click="goToPage('/')">Home style 1</a></li>-->
<!--                    <li><a href="index-demo-2.html">Home style 2</a></li>-->
<!--                    <li><a href="index-demo-3.html">Home style 3</a></li>-->
<!--                    <li><a href="index-demo-4.html">Home style 4</a></li>-->
<!--                    <li><a href="index-demo-5.html">Home style 5</a></li>-->
<!--                    <li><a href="index-demo-6.html">Home style 6</a></li>-->
<!--                  </ul>-->
                </li>
                <li><a @click="goToPage('/about')">About Us</a></li>
                <li><a @click="goToPage('/services')">Services</a></li>
                <li><a @click="goToPage('/faq')">FAQ</a></li>
                <li>
                  <a @click="goToPage('/blog')">Blog</a>
<!--                  <ul class="dropdown">-->
<!--                    <li><a href="index-blog.html">Blog Posts</a></li>-->
<!--                    <li>-->
<!--                      <a href="index-blog-with-sidebar.html">Sidebar Blog </a>-->
<!--                    </li>-->
<!--                    <li><a href="index-single-blog.html">Blog Details</a></li>-->
<!--                  </ul>-->
                </li>
                <li><a @click="goToPage('/contact')">Contact</a></li>
              </ul>

              <!-- Button -->
              <!--              <a href="#" class="btn login-btn ml-50" @click="login">Log in</a>-->
              <div class="btn login-btn ml-50" @click="goToPage('/login')">
                登 录
              </div>
            </div>
            <!-- Nav End -->
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!-- ##### Header Area End ##### -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
console.log(import.meta.env);
const goToPage = (path: string) => {
  console.log("111");
  router.push({ path: path });
};

// import { useRouter } from "vue-router";
// function goToPage(path: string){
//   const router = useRouter();
//   console.log(path, router)
//   router.push({ path });
// }
// const goToPage = (path: string) => {
//
// };
</script>

<style lang="scss" scoped></style>
