<template>
  <div class="calculator_Section container">
    <div class="row">
      <div class="info">
        <h3 class="heading_lightBlue mt-3">Simple Bitcoin Converter</h3>
        <span class="text_normal text_greey">Stay up to date with the current price of Bitcoin!</span>
      </div>
    </div>
    <div class="row mt-5 pb-5">
      <div class="calculator">
        <div class="input_section">
          <input type="number" class="form-control">
          <div class="select mt-1">
            <v-select :priceTag="['BTC','ETH','LTC']" border="0"/>
          </div>
        </div>
        <span>
          =
        </span>
        <div class="input_section">
          <input type="number" class="form-control">
          <div class="select mt-1">
            <v-select :priceTag="['USD','EUR','RUR']" border="0"/>
          </div>
        </div>
        <div class="input_section">
          <router-link to="/buysell" class="btn btn_blue">BUY NOW</router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="info pb-5">
        <h3 class="heading_lightBlue mt-5">How it works?</h3>
        <span class="text_normal text_greey">The K7 Bitcoin price calculator tool allows you to convert easily between Bitcoin and preferred fiat currencies (USD or EUR).
        This simple converter uses actual exchange rates based on the K7 Bitcoin last price.</span>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "../../_general/currency-select";
export default {
name: "v-calculator-section",
  components:{
    VSelect
  }
}
</script>

<style scoped>
.heading{

}
  .calculator{
    display: grid;
    grid-template-columns: 2fr 1fr 4fr 4fr;
    grid-gap: 10px;
  }
  .calculator > span{
    font-size: 45px;
    line-height: 1;
    text-align: center;
    color: #a0a0a0;
    font-weight: bold;
  }
.calculator >.input_section{
  width: 300px;
  height: 60px;
}
  .calculator >.input_section > input{
    height: 100%;
    font-size: 35px;
    color: #42a5a5;
    font-weight: bold;
    border-radius: 0;
    width: 100% !important;
  }
.calculator >.input_section >*{
  display: block;
}
  .calculator >.input_section > input:focus{
    box-shadow: none;
  }
  .select{
    width: 100px;
  }
  a{
    width: 50%;
    height: 100%;
    line-height: 3;
    border-radius: 0;
  }
</style>