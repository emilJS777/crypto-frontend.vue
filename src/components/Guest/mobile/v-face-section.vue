<template>
<div class="face_section pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1 class="heading_darkBlue">Buy. Sell. Earn.</h1>
        <p class="text_greey text_big mt-3">
          With the CEX.IO mobile app, you can enjoy the freedom of money at the touch of a button. Buy, sell, earn, and exchange crypto anywhere and anytime. Our goal is to simplify access to the open financial system and make crypto and fiat transactions affordable and attractive. Time to do money the way you like.
        </p>
        <div class="app_stores_logos_block">
          <div>
            <a href="#">
              <div class="left content-center">
                <img :src="require('@/assets/icons/apple.png')" alt="">
              </div>
              <div class="right">
                <span>Download on the</span>
                <p>App Store</p>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="left content-center">
                <img :src="require('@/assets/icons/googlePlay.png')" alt="">
              </div>
              <div class="right">
                <span>GET IT ON</span>
                <p>Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <img :src="require('@/assets/img/mobile.png')" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "v-face-section"
}
</script>

<style scoped>
.face_section{
  margin-top: 30px;
  background-color: #f5f7fa;
}
img{
  width: 300px;
  height: 400px;
  display: block;
  margin: 0 auto;
}
.app_stores_logos_block {
  display: block;
}
.app_stores_logos_block > div,
.app_stores_logos_block > div > a >  div{
  display: inline-block;
  vertical-align: middle;

}
.app_stores_logos_block > div{
  background-color: #000;
  color: #ccc;
  padding: 5px 15px;
  font-size: 14px;
  margin-right: 15px;
  margin-top: 5px;
  border-radius: 5px;
  width: 200px;

}
.app_stores_logos_block > div > a{
  color: #ccc;
}
.app_stores_logos_block > div > a >.left{
  width: 60px;
}
.app_stores_logos_block > div > a > div >img{
  width: 60%;
  height: 100%;
  float: left;
}

.app_stores_logos_block > div > a > div > *{
  margin-bottom: 0;
  font-weight: bold;
  text-align: center;
}
.app_stores_logos_block > div > a > div > span{
  font-size: 9px;
}
.app_stores_logos_block > div > a > div > p{
  font-size: 16px;
  line-height: 1.5;
}
</style>