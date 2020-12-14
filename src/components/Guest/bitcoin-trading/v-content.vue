<template>
  <div class="content container">
    <div class="row mt-3">
      <h3 class="heading_darkBlue">Bitcoin Trading</h3>
      <p class="text_normal text_greey">
        K7 is a trusted platform for trading Bitcoins. The exchange provides fast order execution, low spread, and access to high liquidity orderbook for top currency pairs on the market. Cross-platform trading is realised via website, mobile app, and several API solutions. Safety of assets and data are backed by high security standards and advanced legal compliance.
      </p>
    </div>
    <h6 class="heading_lightBlue mt-5">To start trading on K7.crypto, follow the steps:</h6>
    <div class="row mt-4">
      <div class="col-4">
        <img src="https://cex.io/img/getting-started/register.png" alt="">
        <h4 class="text_greey mt-3">Sign up with K7Crypto</h4>
        <p class="text_greey text_normal mt-4">
          It will take you only a few steps to <router-link to="/register">register</router-link> and get an account on K7 Bitcoin exchange.
        </p>
      </div>
      <div class="col-4">
        <img src="https://cex.io/img/getting-started/deposit2.png" alt="">
        <h4 class="text_greey mt-3">Deposit funds</h4>
        <p class="text_greey text_normal mt-4">
          <router-link to="/login">Fund account</router-link> with your payment card or via bank transfer. We accept VISA and MasterCard.
        </p>
      </div>
      <div class="col-4">
        <img src="https://cex.io/img/getting-started/trade.png" alt="">
        <h4 class="text_greey mt-3">Start trading</h4>
        <p class="text_greey text_normal mt-4">
          <router-link to="/login">Trade Bitcoin</router-link> via website interface, <router-link to="/mobile">mobile app</router-link> or using automated trading solutions.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-1">
        <img src="https://cex.io/img/fee2.svg" alt="">
      </div>
      <div class="col-11">
        <h3 class="heading_lightBlue">Commission</h3>
        <p class="text_greey text_normal">
          K7.Crypto exchange charges variable commissions of 0% to 0.2%, depending on the trading pair. Special conditions are discussable for high-volume traders. Volume-based trade fees are coming soon. Read more <router-link to="/limits-commissions">here</router-link>.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-1">
        <img src="https://cex.io/img/api.svg" alt="">
      </div>
      <div class="col-11">
        <h3 class="heading_lightBlue">K7.Crypto API</h3>
        <p class="text_greey text_normal">
          CEX.IO provides several API solutions for automated trading based on needs of individuals and institutions. REST API is a basic tool for quick access to CEX.IO market data and automated trade management. WebSocket API with full trading functionality is mainly used by professional traders. Finally, FIX API is the best solution for institutional traders to connect trading systems to a source of Bitcoin liquidity.
        </p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <h4 class="heading_lightBlue">
          Key Advantages
        </h4>
        <ul>
          <li>safe cryptocurrency cold storage and financial viability</li>
          <li>high liquidity orderbook and low spread</li>
          <li>advanced order-matching algorithms</li>
          <li>cross-platform trading via website, mobile app and API</li>
          <li>easy deposits and guaranteed withdrawals</li>
          <li>advanced and transparent reporting</li>
        </ul>
      </div>
    </div>
    <router-link class="btn btn_blue start_btn mt-4" to="/register">Start Trading</router-link>
  </div>
</template>

<script>
export default {
name: "v-content"
}
</script>

<style scoped>
  img{
    width: 80px;
    height: auto;
  }
  p > a{
    color: #42a5a5;
    font-weight: bold;
  }
  ul > li{
    list-style: initial;
    color: #88918e;
  }
  .start_btn{
    display: table;
    margin: 0 auto;
    padding: 15px 20px;
  }
</style>