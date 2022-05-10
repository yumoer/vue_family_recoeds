<template>
  <main className="hero-section ico-bg1 relative hidden" id="home">
    <!-- Hero Content -->
    <div className="hero-section-content">
      <div className="container">
        <div className="row align-items-center">
          <!-- Welcome Content -->
          <div className="col-12 col-lg-6 col-md-12">
            <div className="welcome-content text-left">
              <div className="promo-section">
                <h3 className="special-head gradient-text cyan mt-s">
                  Data Analysis helps you grow faster
                </h3>
              </div>
              <div className="cd-intro v2 text-left">
                <h1 className="cd-headline clip is-full-width thin" style="line-height: 1.7">
                  <span className="w-text bold">Revolutionary Solutions to Business Problems Using
                    New</span>
                  <span className="cd-words-wrapper" style="width: 210px; display: inline-block">
                    <b className="gradient-text cyan bolder is-hidden" v-for="(ele, index) in data.arr" :key="index">
                      {{ ele }}
                      <span className="o-text">.</span>
                    </b>
                  </span>
                </h1>
              </div>
              <p className="g-text fadeInUp" data-wow-delay="0.3s">{{ data.info }}</p>
              <div className="dream-btn-group fadeInUp w-text" data-wow-delay="0.4s">
                <a href="#" className="btn more-btn pink mr-3">Learn More</a>
                <!--                <div className="video-demo-prev">-->
                <!--                  <a href="#" className="btn more-btn video-btn v2 mr-3"-->
                <!--                    ><i className="fa fa-play"></i>-->
                <!--                  </a>-->
                <!--                  <span>Watch Demo</span>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
          <div className="mt-50 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12">
            <div className="wow fadeInUp" style="" data-wow-delay="0.5s">
              <img src="@/assets/img/core-img/header-ill.png" alt="" className="sity img-responsive center-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const data = reactive({
  info: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat est, a labore excepturi rem sed eius facere error!Dolore in perspiciatis porro dolor debitis Odit quaerat est',
  arr: ["Artificial Intelligence", "Machine Learning", "Data Analysis"],
});
</script>

<style lang="scss" scoped>
</style>
