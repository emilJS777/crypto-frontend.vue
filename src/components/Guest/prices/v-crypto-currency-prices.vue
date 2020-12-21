<template>
  <div class="crypto_currency_prices container">
    <div class="row">
      <div class="col-12 table">
        <h1 class="heading_lightBlue mb-5 mt-4">Cryptocurrency prices</h1>
        <div class="row table_head">
          <div class="col-3"><span>name</span></div>
          <div class="col-3"><span>price</span></div>
          <div class="col-3"><span>change (24)</span></div>
          <div class="col-3"><span></span></div>
        </div>
        <div class="row table_body">
          <div class="col-3">
            <i class="cf cf-btc"></i>
            <router-link to="/spot-trading">Bitcoin</router-link>
          </div>
          <div class="col-3"><p>USD 15260.7</p></div>
          <div class="col-3"><p class="minus">-0.45%</p></div>
          <div class="col-3"><router-link to="/spot-trading" class="btn btn_blue">Trade</router-link></div>
        </div>
        <div class="row table_body">
          <div class="col-3">
            <i class="cf cf-ltc"></i>
            <router-link to="/spot-trading">Litecoin</router-link>
          </div>
          <div class="col-3"><p>USD 15260.7</p></div>
          <div class="col-3"><p class="plus">+0.45%</p></div>
          <div class="col-3"><router-link to="/spot-trading" class="btn btn_blue">Trade</router-link></div>
        </div>
        <div class="row table_body">
          <div class="col-3">
            <i class="cf cf-xrp"></i>
            <router-link to="/spot-trading">Ripple</router-link>
          </div>
          <div class="col-3"><p>USD 15260.7</p></div>
          <div class="col-3"><p class="minus">-0.45%</p></div>
          <div class="col-3"><router-link to="/spot-trading" class="btn btn_blue">Trade</router-link></div>
        </div>
        <div class="row table_body">
          <div class="col-3">
            <i class="cf cf-bch"></i>
            <router-link to="/spot-trading">Bitcoin CASH</router-link>
          </div>
          <div class="col-3"><p>USD 15260.7</p></div>
          <div class="col-3"><p class="plus">+0.45%</p></div>
          <div class="col-3"><router-link to="/spot-trading" class="btn btn_blue">Trade</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-crypto-currency-prices"
}
</script>

<style scoped>
.table{
  text-align: center;
}
.table > div{
  border-bottom: 1px solid #e5e3e3;
}
.table_head > div{
  color: #919494;
  padding-bottom: 15px;
}
.table_head > div:first-child{
  text-align: left;
}
.table_head > div:last-child{
  text-align: right;
}
.table_body > div{
  padding-top: 25px;
  padding-bottom: 15px;
  font-weight: bold;
}
.table_body > div:first-child{
  text-align: left;
}
.table_body > div:last-child{
  text-align: right;
}
.table_body > div:nth-child(2){
  color: #8298a5;
}
.table_body > div > i{
  color: #079494;
  font-size: 30px;
  vertical-align: middle;
  margin-right: 10px;
}
.table_body > div > *{
  display: inline-block;
}
.table_body > div > p{
  line-height: 2;
  vertical-align: center;
  margin: 0;
  font-size: 14px;
  transition: .2s;
}
.table_body > div > a{
  color: inherit;
}
.table_body > div:first-child > p{
  cursor: pointer;
  text-decoration: underline !important;
}
.table_body > div > p:hover{
  color: #42a5a5;
}
.table_body > div > p.minus{
  color: #fa2121;
}
.table_body > div > p.plus{
  color: #02795d;
}
</style>