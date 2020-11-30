<template>
  <div class="top_crypto">
    <div class="container">
      <div class="row">
        <div class="col-12 table">
          <h1 class="heading_lightBlue">Top cryptocurrencies</h1>
          <div class="row table_head">
            <div class="col-3"><span>name</span></div>
            <div class="col-3"><span>price</span></div>
            <div class="col-3"><span>change (24)</span></div>
            <div class="col-3"><span>trade</span></div>
          </div>
          <div class="row table_body">
            <div class="col-3">
              <img :src="require('@/assets/icons/bitcoin.png')" alt="">
              <p>Bitcoin</p>
            </div>
            <div class="col-3"><p>USD 15260.7</p></div>
            <div class="col-3"><p class="minus">-0.45%</p></div>
            <div class="col-3"><router-link to="/buysell" class="btn btn_blue">Buy</router-link></div>
          </div>
          <div class="row table_body">
            <div class="col-3">
              <img :src="require('@/assets/icons/bitcoin.png')" alt="">
              <p>Litecoin</p>
            </div>
            <div class="col-3"><p>USD 15260.7</p></div>
            <div class="col-3"><p class="plus">+0.45%</p></div>
            <div class="col-3"><router-link to="/buysell" class="btn btn_blue">Buy</router-link></div>
          </div>
          <div class="row table_body">
            <div class="col-3">
              <img :src="require('@/assets/icons/bitcoin.png')" alt="">
              <p>Bitcoin</p>
            </div>
            <div class="col-3"><p>USD 15260.7</p></div>
            <div class="col-3"><p class="minus">-0.45%</p></div>
            <div class="col-3"><router-link to="/buysell" class="btn btn_blue">Buy</router-link></div>
          </div>
          <div class="row table_body">
            <div class="col-3">
              <img :src="require('@/assets/icons/bitcoin.png')" alt="">
              <p>Bitcoin</p>
            </div>
            <div class="col-3"><p>USD 15260.7</p></div>
            <div class="col-3"><p class="plus">+0.45%</p></div>
            <div class="col-3"><router-link to="/buysell" class="btn btn_blue">Buy</router-link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-top-crypto-section",
  components: {}
}
</script>

<style scoped>
  .top_crypto{
    background-color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .top_crypto > div > div > div > h1{
    text-align: center;
    margin-bottom: 100px;
  }
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
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .table_body > div:first-child{
    text-align: left;
  }
  .table_body > div:last-child{
    text-align: right;
  }
  .table_body > div > img{
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }
  .table_body > div > *{
    display: inline-block;
  }
  .table_body > div > p{
    line-height: 2;
    vertical-align: center;
    margin: 0;
    font-size: 20px;
    transition: .2s;
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