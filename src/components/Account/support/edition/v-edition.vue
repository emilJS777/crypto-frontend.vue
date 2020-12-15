<template>
  <div class="container edition">
    <div class="row justify-content-center">
      <div class="col-10 mt-5">
        <div class="header">
          <h2 class="">How to buy crypto</h2>
        </div>
        <div class="subheader">
          <div class="img">
            <img src="https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590" alt="">
          </div>
          <div class="span">
            <span>afftor jesica</span>
            <span>15 days ago</span>
          </div>
        </div>
        <div class="info_section">
          <p>
            At K7.crypto, you can buy crypto as easily as you shop online. Just select the amount of
            crypto you want to get and pay directly with your debit/credit card. The whole process takes
            less than five minutes:
          </p>
          <ul>
            <li>Open the Buy/Sell page</li>
            <li>Choose a crypto pack and click Buy </li>
            <li>Enter your card number and card expiry date</li>
          </ul>
          <p>
            You’ll have the crypto you purchased on your K7.crypto balance within minutes.
          </p>
          <p>
            We’ve prepared a detailed guide to help you become a crypto owner without hassle.
          </p>
          <h4 class="mt-5">1. Register an account</h4>
          <p>
            You’ll need to provide your email address, country of residence, first and last name, and date of birth. US residents should also pass Identity verification before making a purchase.
          </p>
        </div>
        <div class="info_section">
          <p>
            At K7.crypto, you can buy crypto as easily as you shop online. Just select the amount of
            crypto you want to get and pay directly with your debit/credit card. The whole process takes
            less than five minutes:
          </p>
          <ul>
            <li>Open the Buy/Sell page</li>
            <li>Choose a crypto pack and click Buy </li>
            <li>Enter your card number and card expiry date</li>
          </ul>
          <p>
            You’ll have the crypto you purchased on your K7.crypto balance within minutes.
          </p>
          <p>
            We’ve prepared a detailed guide to help you become a crypto owner without hassle.
          </p>
          <h4 class="mt-5">1. Register an account</h4>
          <p>
            You’ll need to provide your email address, country of residence, first and last name, and date of birth. US residents should also pass Identity verification before making a purchase.
          </p>
        </div>
        <div class="info_section">
          <p>
            At K7.crypto, you can buy crypto as easily as you shop online. Just select the amount of
            crypto you want to get and pay directly with your debit/credit card. The whole process takes
            less than five minutes:
          </p>
          <img :src="require('@/assets/img/spot_trading_img.png')" alt="">
        </div>
        <div class="info_section">
          <p>
            At K7.crypto, you can buy crypto as easily as you shop online. Just select the amount of
            crypto you want to get and pay directly with your debit/credit card. The whole process takes
            less than five minutes:
          </p>
          <ul>
            <li>Open the Buy/Sell page</li>
            <li>Choose a crypto pack and click Buy </li>
            <li>Enter your card number and card expiry date</li>
          </ul>
          <p>
            You’ll have the crypto you purchased on your K7.crypto balance within minutes.
          </p>
          <p>
            We’ve prepared a detailed guide to help you become a crypto owner without hassle.
          </p>
          <h4 class="mt-5">1. Register an account</h4>
          <p>
            You’ll need to provide your email address, country of residence, first and last name, and date of birth. US residents should also pass Identity verification before making a purchase.
          </p>
        </div>

        <div class="appraisal">
          <h6>Question pomog ?</h6>
          <div class="smails">
            <img :src="require('@/assets/icons/iconfinder_angry_2299777.png')" alt="">
            <img :src="require('@/assets/icons/iconfinder_happy_2299783.png')" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-edition"
}
</script>

<style scoped>
  .edition > div > div{
    background-color: #fff;
  }
  .header{
    padding: 15px;
  }
  .header > h2{
    text-align: center;
    color: #6e6b6b;
  }
  .subheader > div{
    display: inline-block;
    vertical-align: middle;
  }
  .subheader img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: block;
  }
  .subheader > div > span{
    display: block;
    margin-left: 10px;
    color: #5d706b;
    line-height: 1.5;
  }
  .header > span{
    margin-left: 10px;
  }
  .info_section{
    line-height: 1.6;
    font-size: 18px;
    margin-top: 40px;
    color: #696d6d;
  }
  ul{
    padding-left: 20px;
  }
  ul > li{
    list-style: initial;
  }
  .appraisal{
    width: 500px;
    margin: 40px auto;
    background-color: #f8f6f6;
    text-align: center;
  }
  .appraisal img{
    width: 50px;
    height: 50px;
    padding: 5px;
    cursor: pointer;
  }
  .appraisal img:hover{
    background-color: #f1f1f1;
  }
  .smails{
    padding: 10px;
  }
</style>