<template>
  <div>
    <!-- ##### Welcome Area Start ##### -->
    <div
      class="breadcumb-area clearfix dzsparallaxer auto-init"
      data-options='{direction: "normal"}'
    >
      <div
        class="divimage dzsparallaxer--target"
        style="
          width: 101%;
          height: 130%;
          background-image: url('src/assets/img/bg-img/bg-2.jpg');
        "
      ></div>
      <!-- breadcumb content -->
      <div class="breadcumb-content">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                <h2 class="w-text title wow fadeInUp" data-wow-delay="0.2s">
                  日历记录
                </h2>
                <ol
                  class="breadcrumb justify-content-center wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    CALENDAR
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ##### Welcome Area End ##### -->

    <!-- ##### About Us Area Start ##### -->
    <section
      class="about-us-area ico-about-bg section-padding-100-0 clearfix"
      id="about"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
            <div class="welcome-meter">
              <img src="src/assets/img/core-img/about3.png" alt="" />
            </div>
          </div>
          <div class="col-12 col-lg-6 offset-lg-0 mt-s">
            <div class="who-we-contant">
              <div
                class="dream-dots text-left fadeInUp"
                data-wow-delay="0.2s"
                style="
                  visibility: visible;
                  animation-delay: 0.2s;
                  animation-name: fadeInUp;
                "
              >
                <span class="gradient-text blue"
                  >We are the experts you exactly need</span
                >
              </div>
              <h4 class="fadeInUp" data-wow-delay="0.3s">
                We are a Machine Learning Consulting Firm Experienced in AI
              </h4>
              <p class="fadeInUp" data-wow-delay="0.4s" style="color: #888">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit eum illum tempora? Ducimus eum culpa voluptates dolorem
                dolorum et sit nisi, mollitia animi porro fuga sequi, molestias
                repellat excepturi nobis eum culpa voluptates dolorem dolorum et
                Ducimus eum culpa voluptates dolorem dolorum et sit nisi,
                mollitia animi porro fuga sequi.
              </p>
              <div class="list-wrap align-items-center mb-20">
                <div class="row">
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">Managed Sucre Backups</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">PHP 7 Ready Servers</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">Advanced Caching</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">24/7 Expert Support</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">Unlimited Applications</div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="side-feature-list-item">
                      <i
                        class="fa fa-check-square-o check-mark-icon-font"
                        aria-hidden="true"
                      ></i>
                      <div class="foot-c-info">Optimized Stack</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-items-center" style="width:600px;height: 500px;margin-top: 50px">
          <baidu-calendar @change="change" :date="date" :range="range" />
          <div>sss</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// const value = ref(new Date());
const date = ref(""); //设置日期，若不设置，则默认为今天
//date改变触发事件
const change = (obj: void) => {
  console.log("obj", obj);
};
const range = [2015, 2025]; //设置年份范围 默认[2010,2030]
</script>

<style lang="scss" scoped>
::v-deep(.op-calendar-pc-right-almanacbox) {
  display: none;
}
::v-deep(.op-calendar-pc-right-day) {
  margin: 2px 60px;
  float: left;
}
::v-deep(.op-calendar-pc-right-date) {
  font-size: 20px;
  line-height: 60px;
  width: 400px;
}
::v-deep(.op-calendar-pc-right-lunar c-gap-top-small) {
  float: left;
}
</style>
