<template>
  <Main />
  <Section />
<!--  <Aside />-->
<!--  <Slider />-->
</template>

<script lang="ts">
import Main from "@/components/Main/main.vue";
import Section from "@/components/Section/section.vue";
import Aside from "@/components/Aside/aside.vue";
import Slider from "@/components/Slider/slider.vue";
export default {
  components: {
    Main,
    Section,
    Aside,
    Slider,
  },
};
</script>

<style lang="scss" scoped></style>
