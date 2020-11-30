<template>
  <div class="container pt-5 ">
    <h1 class="heading_lightBlue mt-2 mb-5 pb-3">Our Products</h1>
    <carousel :per-page="1"
              :autoplay="true"
              :navigationEnabled="true"
              :mouse-drag="true">
      <slide v-for="(info, index) in descSlides" :key="index">
        <div class="row">
          <div class="col-6 desc">
            <h1 class="heading_lightBlue pb-2"><v-logo/>{{info.title}}</h1>
            <p class="text_big text_greey mt-3 mb-3">{{info.desc}}</p>
            <a href="#" class="btn btn_blue">Go to K7.crypto</a>
          </div>
          <div class="col-6">
            <img class="box_shadow" :src=info.imgUrl alt="">
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import VLogo from "@/components/_general/v-logo";
export default {
name: "v-our-products-slider",
  components:{
    VLogo,
    Carousel,
    Slide
  },
  data(){
  return{
    descSlides:[
      {
        title: 'K7-CLAN',
        desc: 'A marketplace for customers who want to instantly buy/sell cryptocurrencies, trade crypto assets, or exchange them for fiat money.',
        imgUrl: require('@/assets/img/spot_trading_img.png')
      },
      {
        title: 'K7-CLAN',
        desc: 'A marketplace for customers who want to instantly buy/sell cryptocurrencies, trade crypto assets, or exchange them for fiat money.',
        imgUrl: require('@/assets/img/spot_trading_img.png')
      }
    ]
  }
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .desc> h1{
    text-align: left;
    font-size: 45px;
  }
  a{
    font-size: 25px;
  }
  img{
    width: 95%;
    display: block;
    height: 100%;
    margin: 0 auto;
  }
</style>