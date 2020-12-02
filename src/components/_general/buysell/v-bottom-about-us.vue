<template>
  <div class="container-fluid pt-5">
    <div class="row">
      <div class="col-12">
        <div class="we_accept_cards_logo">
          <img :src="require('@/assets/img/mastercard.png')" alt="">
          <img :src="require('@/assets/img/creditcards.png')" alt="">
          <img :src="require('@/assets/img/Visa.png')" alt="">
        </div>
        <div class="about_us">
          <span class="text_greey">© 2020-2020 CEX.IO Ltd (US)</span>
          <span class="text_greey">33 St. James's Square, London, England, SW1Y 4JS, United Kingdom</span>
          <span class="text_greey">Have any questions? Contact our 24/7 support</span>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="footer_about_us mt-3">
          <p>© 2013-2020 CEX.IO LTD Trademarks belong to their respective owners. All rights reserved Server time: 2020-11-15 13:22:00</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-bottom-about-us"
}
</script>

<style scoped>
  .we_accept_cards_logo{
    display: table;
    margin: 15px auto;
  }
  .we_accept_cards_logo > img{
    width: 50px;
    text-align: center;
  }
  .about_us > span{
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 2;
  }
  .footer_about_us{
    background-color: #42a5a5;
    color: #fff;
    display: block;
    width: 100%;
    text-align: center;
    padding: 20px;
    padding-bottom: 20px;
  }
  .footer_about_us > p{
    font-size: 16px;
  }
</style>