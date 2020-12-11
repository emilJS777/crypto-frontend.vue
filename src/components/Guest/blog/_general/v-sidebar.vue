<template>
  <div class="sidebar">
    <div class="bitcoin_price_block">
      <a href="#">
        <span>1 BITCOIN</span>
        <p>$ 17938.2</p>
      </a>
    </div>
    <div class="buy_btc_block mt-4">
      <a href="/blog">
        <v-logo/>
        <p class=" mt-4">
          BUY BITCOINS WITH YOUR CREDIT CARD
        </p>
        <span>
           USD, EUR, GBP and RUB accepted
        </span>
        <button class="btn btn_blue mt-3">
          BUY BITCOINS
        </button>
      </a>
    </div>
    <div class="nav mt-4">
      <h5>Recent Posts</h5>
      <ul>
        <li>
          <a href="#">
            K7 will support Golem token migration: GNT to GLM
          </a>
        </li>
        <li>
          <a href="#">
            ZiIliqa rewards season on
          </a>
        </li>
        <li>
          <a href="#">
            K7 Crypto
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VLogo from "../../../_general/v-logo";
export default {
  name: "v-left-sidebar",
  components: {VLogo}
}
</script>

<style scoped>
  .sidebar{
    padding-top: 20px;
    padding-right: 15px;
    padding-left: 15px;
    height: 100%;
  }
  .bitcoin_price_block{
    display: block;
    border-bottom: 1px solid #cfcfcf;
    padding: 10px;
  }
  .bitcoin_price_block >a> span{
    display: table;
    margin: 0 auto;
    font-style: italic;
    color: #b5b5b5;
  }
  .bitcoin_price_block >a >p{
    display: block;
    clear: both;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #8d8d8d;
    margin: 0;
  }
  .buy_btc_block{
    padding: 10px;
    background-color: #9ab1b1;
    border-radius: 6px;
  }
  .buy_btc_block >a{
    display: block;
  }
  .buy_btc_block >a > p{
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    text-align: center;
  }
  .buy_btc_block >a > span{
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
  .buy_btc_block >a > button{
    border: 1px solid #fff;
    width: 100%;
    padding: 10px;
    font-weight: bold;
  }
  .nav li{
    font-size: 18px;
    color: #2c3030;
    margin-top: 15px;
  }
  .nav li:hover{
    color: #42a5a5;

  }
  .nav a{
    color: inherit;
    display: block;
  }
</style>