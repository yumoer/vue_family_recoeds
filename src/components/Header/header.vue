<template>
  <!-- ##### Header Area Start ##### -->
  <header class="header-area fadeInDown" data-wow-delay="0.2s">
    <div class="classy-nav-container light breakpoint-off">
      <div class="container">
        <!-- Classy Menu -->
        <nav class="classy-navbar light justify-content-between" id="dreamNav">
          <!-- Logo -->
          <a class="nav-brand light" @click="goToPage('/')"
            ><img src="src/assets/img/core-img/logo.png" alt="logo" /> Life
            Drips
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
                <li><a @click="goToPage('/')">首页</a></li>
                <li><a @click="goToPage('/calendar')">记录日历</a></li>
                <li><a @click="goToPage('/about')">关于我们</a></li>
                <li><a @click="goToPage('/services')">我的服务</a></li>
                <li><a @click="goToPage('/faq')">常见问题</a></li>
                <li><a @click="goToPage('/blog')">我的博客</a></li>
                <li><a @click="goToPage('/contact')">联系我们</a></li>
              </ul>
            </div>
            <!-- Nav End -->
          </div>

          <div
            v-if="!name"
            class="btn login-btn ml-50"
            @click="goToPage('/login')"
          >
            登 录
          </div>
          <a v-else>
            <el-avatar
              :size="25"
              style="position: relative; top: 7px"
              :src="circleUrl"
            />
            <span style="color: pink; padding-left: 5px">{{ name }}</span> ,
            <span style="color: #00a8ff" @click="goToQuit"> 退出</span>
          </a>
        </nav>
      </div>
    </div>
  </header>
  <!-- ##### Header Area End ##### -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue";
const router = useRouter();
const circleUrl = ref(
  "http://47.94.106.106:8888/group1/M00/5D/BE/rBHxiGHELhWAJRuVAABU0vxqD4w4979165"
);
console.log(import.meta.env);
const name = localStorage.getItem("name");
console.log(name);
const goToPage = (path: string) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  router.push({ path: path });
};
const goToQuit = () => {
  ElMessageBox.confirm("此操作将会退出当前登录用户?", "退出登录", {
    confirmButtonText: "确认退出",
    cancelButtonText: "点错了",
    type: "warning",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "退出成功，请重新登录",
      });
      localStorage.clear();
      router.push("/login");
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "点错了，已取消",
      });
    });
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
