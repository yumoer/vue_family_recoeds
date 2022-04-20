<template>
  <section className="section-padding-100-70 relative bub-right" id="feat">
    <div className="container">
      <div className="section-heading text-center">
        <!-- Dream Dots -->
        <div
          className="dream-dots justify-content-center fadeInUp"
          data-wow-delay="0.2s"
        >
          <span className="gradient-text blue">{{ data.name }}</span>
        </div>
        <h2 className="fadeInUp" data-wow-delay="0.3s">{{ data.title }}</h2>
        <p className="fadeInUp" data-wow-delay="0.4s">{{ data.info }}</p>
      </div>

      <div className="row">
        <div
          className="col-12 col-md-6 col-lg-4 "
          v-for="(ele, index) in data.list"
          :key="index"
          @click="goToPage('/calendar')"
        >
          <!-- Content -->
          <div
            className="service_single_content text-center mb-100 fadeInUp hover"
            data-wow-delay="0.4s"
          >
            <!-- Icon -->
            <div className="service_icon">
              <img :src="ele.icon" alt="" />
            </div>
            <h6 className="bold">{{ ele.name }}</h6>
            <p>{{ ele.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const data = reactive({
  name: "记录生活",
  title: "生活打点滴",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.",
  list: [
    {
      icon: "/src/assets/img/icons/w5.png",
      name: "记录日历",
      info: "Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.",
    },
    {
      icon: "/src/assets/img/icons/w4.png",
      name: "图片故事",
      info: "Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.",
    },
    {
      icon: "/src/assets/img/icons/w6.png",
      name: "趣事分享",
      info: "Lorem ipsum dolor sit amet, adipiscing elit. Nulla neque quam,maxi ut ac cu msan ut, posuere sit Lorem ipsum qu.",
    },
  ],
});
const goToPage = (path: string) => {
  console.log('111')
  router.push({ path: path });
};
</script>

<style lang="scss" scoped>
.hover:hover{
  border: 1px solid;
  cursor: pointer;
}
</style>
