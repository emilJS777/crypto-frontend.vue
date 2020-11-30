<template>
  <div class=" mb-5">
    <carousel :per-page="1"
              :autoplay="true"
              :mouse-drag="true">
      <slide class="slide"
             v-for="(info, index) in descSlides" :key="index">
        <div class="desc">
          <div>
            <h2 class="heading_darkBlue">{{info.title}}</h2>
            <p class="text_greey text_big">{{info.desc}}</p>
          </div>
        </div>
        <img :src=info.imgUrl>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
export default {
name: "v-slider-section",
  components: {
  Carousel,
    Slide
  },
  data(){
  return{
    descSlides:[
      {
        title: 'True Partners real freeback',
        desc: 'We’re always delighted to work with CEX.IO. Communication is smooth and transparent while commission payments are fast and clear. Our users love them too because they find it easy to sign-up. All in all, we’re glad to have the CEX.IO team as part of our journey in educating users on ways to safely get involved in trading crypto.',
        imgUrl: require('@/assets/img/first-slider.png')
      },
      {
        title: 'True Partners real freeback',
        desc: 'We’re always delighted to work with CEX.IO. Communication is smooth and transparent while commission payments are fast and clear. Our users love them too because they find it easy to sign-up. All in all, we’re glad to have the CEX.IO team as part of our journey in educating users on ways to safely get involved in trading crypto.',
        imgUrl: require('@/assets/img/first-slider.png')
      }
    ]
  }
  }
}
</script>

<style scoped>
  .slide{
    position: relative;
  }
  .desc{
    position: absolute;
    top: 0;
    left: 100px;
    width: 600px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
  }
</style>