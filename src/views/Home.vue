<template>
  <div class="home">
   <button @click="login">退出</button>
  </div>
</template>

<script setup lang="ts">
import { themeChange } from "@/assets/ts/utils";
import { onMounted } from "vue";
import { fetchUserInfo } from "@/api";
import { useRouter } from "vue-router";
const router = useRouter();
console.log(import.meta.env);
function login() {
  router.push("/login");
}
// onMounted(async () => {
//   try {
//     let res = await fetchUserInfo()
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// })
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
