<template>
  <div class="login">
    <button @click="handleLogin">登录</button>
  </div>
  
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router = useRouter()
function handleLogin(){
  router.push('/')
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
