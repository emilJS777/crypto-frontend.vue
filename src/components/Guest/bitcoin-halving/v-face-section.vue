<template>
  <div class="face_section">
    <div class="container">
      <div class="row">
        <div class="col-6 left_section">
          <h1 class="heading_darkBlue">Bitcoin Halving</h1>
          <p class="text_big text_greey mt-3">Everything you need to know about the next Bitcoin halving</p>
          <router-link to="/buysell" class="btn btn_blue mt-3">Buy Bitcoin on K7crypto</router-link>
        </div>
        <div class="col-6">
          <div class="socials_block box_shadow">
            <div>
              <span class="text_big text_greey">Share this news on:</span>
              <a href="#">
                <img :src="require('@/assets/icons/social/iconfinder_twitter-social-media_765208.png')" alt="">
              </a>
              <a href="#">
                <img :src="require('@/assets/icons/social/iconfinder_facebook-social-media_765252.png')" alt="">
              </a>
              <a href="#">
                <img :src="require('@/assets/icons/social/iconfinder_linkedin-social-media_765228.png')" alt="">
              </a>
            </div>
          </div>
          <div class="time_block mt-5">
            <div class="days">
              <p>1171 :</p>
              <span>Days</span>
            </div>
            <div class="hours">
              <p>18 :</p>
              <span>Hours</span>
            </div>
            <div class="minutes">
              <p>51 :</p>
              <span>Minutes</span>
            </div>
            <div class="seconds">
              <p>51</p>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row bottom_section">
        <div class="col-4">
          <img src="https://static.cex.io/landings/media/block_type1.svg" alt="">
          <h4 class="heading_darkBlue">Current block height</h4>
          <span class="text_big text_greey">661,439</span>
        </div>
        <div class="col-4">
          <img src="https://static.cex.io/landings/media/block_type2.svg" alt="">
          <h4 class="heading_darkBlue">Blocks until halving</h4>
          <span class="text_big text_greey">178,561</span>
        </div>
        <div class="col-4">
          <img src="https://static.cex.io/landings/media/block_circle.svg" alt="">
          <h4 class="heading_darkBlue">BTC Price</h4>
          <span class="text_big text_greey">$19210.1</span>
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
    padding-top: 120px;
    padding-bottom: 80px;
    background-color: #efefef;
  }
  .left_section > a{
    font-size: 20px;
    padding: 15px 20px;
  }
  .socials_block{
    padding: 25px;
  }
  .socials_block > div{
    display: table;
    margin: 0 auto;
  }
  .socials_block > div > *{
    margin: 10px;
  }
  .socials_block > div > span{}
  .socials_block a{
    margin-right: 5px;
    margin-left: 5px;
  }

  .socials_block img{
    width: 28px;
    height: auto;
    border: 1px solid#ccc;
    border-radius: 4px;
  }
  .socials_block img:hover{
    background-color: #e3e3e3;
  }
  .time_block{
    display: table;
    margin: 0 auto;
  }
  .time_block > div{
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
  .time_block > div > p{
    font-size: 45px;
    color: #4e4e4e;
    margin: 0;
  }
  .time_block > div > span{
    font-size: 15px;
    color: #cbcbcb;
    display: table;
    margin: 0 auto;
    font-weight: bold;
  }
  .bottom_section{
    margin-top: 100px;
  }
  .bottom_section >*{
    text-align: center;
  }
  .bottom_section img{
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }
  .bottom_section span{
    font-weight: bold;
  }
</style>