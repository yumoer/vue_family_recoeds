<template>
  <span class="light-scheme">www</span>
  <button @click="themeChange">切换</button>
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

</style>
