<template>
  <div class="home">
    <h1>日历</h1>
  </div>
</template>

<script setup lang="ts">
import {themeChange} from "@/assets/ts/utils";
import {onMounted} from "vue";
import {fetchUserInfo} from '@/api'
console.log(import.meta.env)
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
.home{
  width: 100%;
  height:80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
