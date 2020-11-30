<template>
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col-8">
        <div class="description"
        v-for="(item, index) in informations" :key="index"
        v-bind:class="index === active ? 'active' : ''"
        @click="switchSlider(index)">
          <h3 class="heading_darkBlue">{{ item.title }}</h3>
          <p class="text_big text_greey">{{ item.desc }}</p>
        </div>
      </div>
      <div class="col-4 slider">
        <div class="img_slider_block">
          <div class="img_block">
            <img class="img" :src="require('@/assets/img/mobile.png')" alt="">
          </div>
          <div class="img_block">
            <img class="img" :src="require('@/assets/img/mobile.png')" alt="">
          </div>
          <div class="img_block">
            <img class="img" :src="require('@/assets/img/mobile.png')" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-slider-section",
  data(){
    return{
      informations:[
        {title: "Instant Buy", desc: "Buy Bitcoin, Ethereum, Ripple, and dozens of other popular cryptocurrencies with your debit or credit card. No time-consuming actions — become a cryp"},
        {title: "Instant Buy", desc: "Buy Bitcoin, Ethereum, Ripple, and dozens of other popular cryptocurrencies with your debit or credit card. No time-consuming actions — become a cryp"},
        {title: "Instant Buy", desc: "Buy Bitcoin, Ethereum, Ripple, and dozens of other popular cryptocurrencies with your debit or credit card. No time-consuming actions — become a cryp"}
      ],
      active: 0
    }
  },
  methods: {
    switchSlider: function (index){
      let imgSliderBlock = document.getElementsByClassName('img_slider_block')[0];
      let left = 350 * index;
      imgSliderBlock.style.left = -left + 'px';

      this.active = index;
    }
  }
}
</script>

<style scoped>
  .description{
    display: block;
    border-left: 4px solid #ced4d7;
    padding: 10px 15px;
    cursor: pointer;
  }
  .description:hover{
    border-left: 4px solid #185477;
  }
  .active{
    border-left: 4px solid #0b364f !important;
  }
  .slider{
    position: relative;
    overflow: hidden;
  }
  .img_slider_block{
    position: absolute;
    display: inline-flex;
    left: 0;
    top: 0;
    height: 100%;
    transition: .3s;
  }
  .img_slider_block > .img_block{
    width: 350px;
    position: relative;
  }
  .img_slider_block > .img_block > img{
    width: 280px;
    height: auto;
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%,-50%);
  }
</style>