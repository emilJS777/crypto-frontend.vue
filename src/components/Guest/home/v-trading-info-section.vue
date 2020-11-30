<template>
  <div class="trading_info_section">
    <div class="container">
      <h1 class="heading_lightBlue">Start trading crypto</h1>
      <div class="row">
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">Payment options</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">Strong security</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">24/7 support</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">Competitive commissions</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">Reliable order execution</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
        <div class="col-4 mb-5">
          <h5><img :src="require('@/assets/icons/facebook-like-24.png')" alt="">Range of API solutions</h5>
          <p class="text_greey text_big">Multiple payment methods: Visa, Mastercard, bank transfer (SWIFT, SEPA, ACH, Faster Payments), cryptocurrency</p>
        </div>
      </div>
      <button class="btn btn_blue">Start trading</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-trading-info-section"
}
</script>

<style scoped>
  .trading_info_section{
    padding-top: 80px;
    padding-bottom: 80px;
  }
  h1{
    text-align: center;
    margin-bottom: 60px;
  }
  h5{
    padding: 5px 10px;
    color: #fff;
    background: #42a5a5;
  }
  h5 > img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 10px;
  }
  p{
    font-size: 18px;
  }
  button{
    display: block;
    margin: 0 auto;
    padding: 15px 25px;
    font-weight: bold;
  }
</style>