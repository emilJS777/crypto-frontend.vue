<template>
  <div class="balance">
    <h4 class="heading_lightBlue">Redeem K7.clan voucher code here</h4>
    <div class="voucher_code_block mt-5">
      <p class="text_normal text_greey text-center">
        Enter your CEX.IO unique voucher code into the field.
        The funds will be automatically added to the respective part of your balance without any fees.
      </p>
      <div class="input_block">
        <div class="col-9">
          <input type="text" class="form-control" placeholder="paste your voucher code here">
        </div>
        <div class="col-3">
          <input type="submit" class="form-control btn btn_blue" value="Redeem">
        </div>
      </div>
    </div>
<!--    fiat balance table-->
    <div class="container-fluid mt-4">
      <h4 class="heading_lightBlue mb-3">Fiat Balance</h4>
      <div class="row">
        <div class="table col-12">
          <div class="row thead">
            <div class="col-2 offset-2">
              <span>Balance</span>
            </div>
            <div class="col-2">
              <span>In Orders</span>
            </div>
            <div class="col-2">
              <span>Total</span>
            </div>
          </div>
          <div class="row tbody"
          v-for="(item, index) in fiatBalance" :key="index">
            <div class="col-1">
              <i class="">{{item.icon}}</i>
            </div>
            <div class="col-1">
              <span>{{item.title}}</span>
            </div>
            <div class="col-2">
              <span>{{item.balance}}</span>
            </div>
            <div class="col-2">
              <span>{{item.orders}}</span>
            </div>
            <div class="col-2">
              <span>{{item.total}}</span>
            </div>
            <div class="col-2">
              <a href="#">Deposit</a>
            </div>
            <div class="col-2">
              <a href="#">Withdraw</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-4">
      <h4 class="heading_lightBlue mb-3">Crypto Balance</h4>
      <div class="row">
        <div class="table col-12">
          <div class="row thead">
            <div class="col-2 offset-2">
              <span>Balance</span>
            </div>
            <div class="col-2">
              <span>In Orders</span>
            </div>
            <div class="col-2">
              <span>Total</span>
            </div>
          </div>
          <div class="row tbody"
          v-for="(item, index) in cryptoBalance" :key="index">
            <div class="col-1">
              <i v-bind:class="'cf cf-'+item.title.toLowerCase()"></i>
            </div>
            <div class="col-1">
              <span>{{item.title}}</span>
            </div>
            <div class="col-2">
              <span>{{item.balance}}</span>
            </div>
            <div class="col-2">
              <span>{{item.orders}}</span>
            </div>
            <div class="col-2">
              <span>{{item.total}}</span>
            </div>
            <div class="col-2">
              <a href="#">Deposit</a>
            </div>
            <div class="col-2">
              <a href="#">Withdraw</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-balance",
  data(){
    return{
      fiatBalance:[
        {title: "USD", balance: '0.00', orders: "0.00", total: '0.00', icon: '$'},
        {title: "EUR", balance: '0.00', orders: "0.00", total: '0.00', icon: '€'},
        {title: "FTS", balance: '0.00', orders: "0.00", total: '0.00', icon: '£'}
      ],
      cryptoBalance:[
        {title: "BTC", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "BCH", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "ETH", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "LTC", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "DASH", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "XRP", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "XLM", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "NEO", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "TRX", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "BTT", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "ONT", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "ATOM", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "USDT", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "ADA", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "USDC", balance: '0.000000', orders: "0.000000", total: '0.000000'},
        {title: "NEO", balance: '0.000000', orders: "0.000000", total: '0.000000'}

      ]
    }
  }
}
</script>

<style scoped>
  h4{
    font-weight: initial;
    letter-spacing: 2px;
  }
  .voucher_code_block{
    width: 60%;
    display: block;
    margin: 0 auto;
  }
  .input_block > *{
    text-align: center;
    display: inline-block;
  }
  .input_block >div > input{
    border-radius: 1px;
    font-size: 14px;
    text-align: center;
  }
  .input_block >div:last-child > input{
    font-size: 12px;
  }
/*  table*/
  .table > .tbody{
    border-top: 1px solid #d9d8d8;
    margin-top: 5px;
    padding-top: 10px;
  }
  .thead span{
    font-size: 13px;
    font-weight: bold;
    color: #757575;
  }
  .tbody i{
    font-size: 18px;
    color: #4a4b4b;
  }
  .tbody span{
    font-size: 14px;
    color: #797777;
    letter-spacing: 2px;
    font-style: italic;
    font-weight: bold;
  }
  .tbody  a{
    color: #fff;
    float: right;
    width: 100%;
    text-align: center;
    font-size: 13px;
    background-color: #42a5a5;
    transition: .3s;
    letter-spacing: 1px;
  }
  .tbody  a:hover{
    background-color: #1f7272;
  }
  .tbody > div:last-child a{
    background-color: #0b364f;
  }
  .tbody > div:last-child a:hover{
    background-color: #051d2b;
  }
</style>