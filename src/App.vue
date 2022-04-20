<template>
  <Preloader />
  <Header v-if="route.name !== 'login'"/>
  <router-view />
<!--  <Footer v-if="route.name !== 'login'"/>-->
</template>

<script lang="ts">
import Preloader from "@/components/Preloader/preloader.vue";
import Header from "@/components/Header/header.vue";
import Footer from "@/components/Footer/footer.vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Preloader,
    Header,
    Footer,
  },
  setup(){
    const route = useRoute()
    return {route}
  }
};
</script>

<style>
@import "assets/css/base.css";
#app {
  width: 100%;
  height: 100%;
  font-weight: normal;
}
</style>
