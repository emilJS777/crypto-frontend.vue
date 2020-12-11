<template>
  <div class="footer_menu">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ul>
            <li><a href="#">Bitcoin Exchange</a></li>
            <li><a href="#">Crypto Affiliate Program</a></li>
            <li><a href="#">Bitcoin Calculator</a></li>
            <li><a href="#">Sell Bitcoin</a></li>
            <li><a href="#">Bitcoin Price Widget</a></li>
            <li><a href="#">BTC to USD</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#">BCH to USD</a></li>
            <li><a href="#">ETH to USD</a></li>
            <li><a href="#">XLM to USD</a></li>
            <li><a href="#">DASH to USD</a></li>
            <li><a href="#">LTC to USD</a></li>
            <li><a href="#">XRP to USD</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#">BTC to GBP</a></li>
            <li><a href="#">BTC to EUR</a></li>
            <li><a href="#">ETH to EUR</a></li>
            <li><a href="#">ETH to GBP</a></li>
            <li><a href="#">XRP to EUR</a></li>
            <li><a href="#">ETH to BTC</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#">Buy Bitcoin</a></li>
            <li><a href="#">Buy Ethereum</a></li>
            <li><a href="#">Buy Stellar Lumens</a></li>
            <li><a href="#">Buy Tron</a></li>
            <li><a href="#">Buy DASH</a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <li><a href="#">Buy Bitcoin Cash</a></li>
            <li><a href="#">Buy Cosmos</a></li>
            <li><a href="#">Buy Litecoin</a></li>
            <li><a href="#">Buy Neo</a></li>
            <li><a href="#">Buy Ontology</a></li>
            <li><a href="#">Buy Ripple</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-footer-menu"
}
</script>

<style scoped>
  .footer_menu{
    border-top: 1px solid #b8b8b8;
    background-color: #212121;
    padding: 20px;
  }
  ul{
  }
  ul > li{
    color: #c8c8c8;
    font-size: 18px;
    display: table;
  }
  ul > li > a{
    display: table;
    color: inherit;
  }
</style>