<template>
  <Home />
</template>

<script lang="ts">
import Home from "@/components/Home/Home.vue";
export default {
  components: {
    Home,
  },
  // onMounted(async () => {
  //   try {
  //     let res = await fetchUserInfo()
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })
};
</script>

<style lang="scss" scoped></style>
