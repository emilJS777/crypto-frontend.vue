<template>
  <div class="container pt-5 pb-5">
    <h1 class="heading_lightBlue mt-2 mb-5 pb-3">Our History</h1>
    <carousel :per-page="1"
              :autoplay="true"
              :navigationEnabled="true"
              :mouse-drag="true">
      <slide v-for="(info, index) in descSlides" :key="index">
        <div class="row">
          <div class="col-6 desc">
            <h5 class="heading_lightBlue pb-2">{{info.title}}</h5>
            <p class="text_greey text_big mt-1 mb-3">{{info.desc}}</p>
          </div>
          <div class="col-6">
            <img :src=info.imgUrl alt="">
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
export default {
name: "v-our-history",
  components:{
    Carousel,
    Slide
  },
  data(){
    return{
      descSlides:[
        {
          title: 'k7 in the registred UK',
          desc: 'A marketplace for customers who want to instantly buy/sell cryptocurrencies, trade crypto assets, or exchange them for fiat money.',
          imgUrl: 'https://www.aljazeera.com/wp-content/uploads/2020/11/2020-11-24T133928Z_788862449_RC2P9K9XL48K_RTRMADP_3_CRYPTO-CURRENCIES.jpg?resize=1200%2C630'
        },
        {
          title: 'k7 in the registred UK',
          desc: 'A marketplace for customers who want to instantly buy/sell cryptocurrencies, trade crypto assets, or exchange them for fiat money.',
          imgUrl: 'https://www.aljazeera.com/wp-content/uploads/2020/11/2020-11-24T133928Z_788862449_RC2P9K9XL48K_RTRMADP_3_CRYPTO-CURRENCIES.jpg?resize=1200%2C630'
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