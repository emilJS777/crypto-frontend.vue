<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-lg-8 mt-5 mb-5">
        <h1 class="heading_darkBlue">Calculate Your Earnings</h1>
        <div class="calculate_block mt-5">
          <div class="top_block">
            <span class="text_big heading_darkBlue">Choose a coin to stake:</span>
            <v-select/>
          </div>
          <div class="progress_block mt-4">
            <div>
              <p class="text_greey">How many coin do you hold?</p>
              <h2 class="heading_darkBlue">5,106 XTZ</h2>
            </div>
            <div>
              <p class="text_greey">Estimated Annual Yield:</p>
              <h2 class="heading_lightBlue">5-6%</h2>
            </div>
            <div class="range">
              <input type="range">
            </div>
          </div>
          <div class="result_block">
            <div class="title">
              <p class="text_greey">Daily Earnings:</p>
            </div>
            <div class="crypto">
              <p class="text_big heading_darkBlue">0.145205 XTZ</p>
            </div>
            <div class="price">
              <p class="text_big heading_lightBlue">0.29 USD</p>
            </div>
          </div>
          <div class="result_block">
            <div class="title">
              <p class="text_greey">Daily Earnings:</p>
            </div>
            <div class="crypto">
              <p class="text_big heading_darkBlue">0.145205 XTZ</p>
            </div>
            <div class="price">
              <p class="text_big heading_lightBlue">0.29 USD</p>
            </div>
          </div>
          <div class="result_block border_none">
            <div class="title">
              <p class="text_greey">Daily Earnings:</p>
            </div>
            <div class="crypto">
              <p class="text_big heading_darkBlue">0.145205 XTZ</p>
            </div>
            <div class="price">
              <p class="text_big heading_lightBlue">0.29 USD</p>
            </div>
          </div>
          <div class="deposit_buy_block mt-3">
            <a href="#" class="btn btn_darkBlue">Deposit</a>
            <a href="#" class="btn btn_blue">Buy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/_general/v-select";
export default {
name: "v-calculate-earnings",
  components: {VSelect}
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .calculate_block{
    width: 100%;
    margin: 0 auto;
  }
  .calculate_block > .top_block > select{
    float: right;
    width: 40%;
  }
  .calculate_block > .top_block > span{
    margin-top: 10px;
    line-height: 3;
  }
  .progress_block > div > p{
    line-height: 1;
  }
  .progress_block > div:first-child{
    float: left;
  }
  .progress_block > div:nth-child(2),
  .progress_block > div:nth-child(2) > h2{
    float: right;
  }
  .progress_block > .range{
    display: block;
    width: 100%;
  }
  .progress_block > .range > input{
    width: 100%;
    height: 40px;
  }

  input[type=range] {
    width: 100%;
    margin: 3.7px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    background: #7faeae;
    border-radius: 1.3px;
    width: 100%;
    height: 8.6px;
    cursor: pointer;
  }
  input[type=range]::-webkit-slider-thumb {
    margin-top: -3.9px;
    width: 21px;
    height: 16px;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #95bcbc;
  }
  input[type=range]::-moz-range-track {
    background: #7faeae;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.6px;
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 21px;
    height: 16px;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 6.7px 0;
    color: transparent;
    width: 100%;
    height: 8.6px;
    cursor: pointer;
  }
  input[type=range]::-ms-fill-lower {
    background: #69a0a0;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type=range]::-ms-fill-upper {
    background: #7faeae;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type=range]::-ms-thumb {
    width: 21px;
    height: 16px;
    background: #ffffff;
    border: 0.5px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #7faeae;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #43a6a6;
  }
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type=range] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }

  .result_block{
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d5d5d5;
  }
  .border_none{
    border: 0;
  }
  .result_block > div{
    display: inline-block;
  }
  .result_block > .title{
    width: 60%;
  }
  .result_block > .price{
    float: right;
  }
  .deposit_buy_block{
    display: block;
    width: 50%;
    margin: 0 auto;
  }
  .deposit_buy_block > a{
      width: 110px;
  }
  .deposit_buy_block > a:last-child{
    float: right;
  }
</style>