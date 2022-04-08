<template>
  <span class="light-scheme">www</span>
  <button @click="change">切换</button>
</template>

<script setup lang="ts">
// 获取布局配置信息
import {ref} from "vue";
const theme = ref(true);
function change(){
  const body = document.documentElement as HTMLElement;
  if (theme.value) {
    theme.value = false;
    body.setAttribute('data-theme', 'dark');
  }else {
    theme.value = true;
    body.setAttribute('data-theme', '');
  }
}
</script>

<style>

</style>
