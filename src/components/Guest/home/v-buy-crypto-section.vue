<template>
  <div class="buy_crypto_section">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card_buy box_shadow">
            <div class="row mb-5">
              <div class="col-8 get">
                <input type="number" class="form-control">
              </div>
              <div class="col-4">
                <v-select
                    :priceTag="['BTC', 'ETH', 'ELC']"/>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-8 pay">
                <input type="number" class="form-control">
              </div>
              <div class="col-4">
                <v-select
                    :priceTag="['USD', 'EUR']"/>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <router-link to="/buysell" class="btn btn_blue">Buy Now</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <h1 class="heading_lightBlue">Buy crypto with a debit or credit card</h1>
          <div class="mb-4">
            <h5>Quickly purchase top cryptocurrencies</h5>
            <p class="text_greey">Become a crypto owner in minutes using your debit or credit card.</p>
          </div>
          <div class="mb-4">
            <h5>Quickly purchase top cryptocurrencies</h5>
            <p class="text_greey">Become a crypto owner in minutes using your debit or credit card.</p>
          </div>
          <div class="we_accept">
            <span class="text_big text_greey">We accept:</span>
            <img :src="require('@/assets/img/creditcards.png')" alt="">
            <img :src="require('@/assets/img/Visa.png')" alt="">
            <img :src="require('@/assets/img/mastercard.png')" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "../../_general/v-select"

export default {
  name: "v-buy-crypto-section",
  components: {
    vSelect
  }
}
</script>

<style scoped>
  .buy_crypto_section{
    background-color: #f5f7fa;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .card_buy{
    background-color: #fff;
    padding: 40px 30px;
    border-radius: 10px;
  }
  .card_buy > div > div >*{
    height: 60px;
    width: 100%;
    font-size: 24px;
  }
  .card_buy > div > div >input{
    padding-left: 45px;
    text-align: right;
    position: relative;
    font-weight: bold;
  }
  .get::after{
    content: "Get:";
    position: absolute;
    left: 22px;
    top: 50%;
    height: 40px;
    font-size: 25px;
    width: 50px;
    transform: translateY(-50%);
    color: #5d706b;
  }
  .pay::after{
    content: "Pay:";
    position: absolute;
    left: 22px;
    top: 50%;
    height: 40px;
    font-size: 25px;
    width: 50px;
    transform: translateY(-50%);
    color: #5d706b;
  }
  a{
    line-height: 1.7;
  }
  .we_accept > img{
    width: 65px;
    margin-left: 15px;
  }
</style>