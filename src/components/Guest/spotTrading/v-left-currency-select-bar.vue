<template>
  <div class="left-currency-select-bar">
    <div class="search_block mb-2">
      <input type="text" class="form-control" placeholder="search...">
      <button class="btn btn_blue">Base/</button>
      <button class="btn btn_blue">/Quote</button>
    </div>
    <div class="selects_block">
      <div class="select hidden"
           v-for="(item, index) in selectInfo" :key="index">
        <h5 @click="ShowHidden(index)">{{ item.title }}</h5>
        <div class="option"
            v-for="(detale, i) in item.detales" :key="i">
            <p>
              <span class="left">{{ detale.exchanger }}</span>
              <span class="right">{{ detale.precent }}</span>
            </p>
            <p class="">
              <span class="left text_greey">{{ detale.time }}</span>
              <span class="right text_greey">{{ detale.coin }}</span>
            </p>
            <p>
              <span class="left text_greey">{{ detale.time }}</span>
              <span class="right text_greey">{{ detale.coin }}</span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-left-currency-select-bar",
  data(){
    return{
      selectInfo:[
        {
          title: "BTC",
          detales: [{exchanger: "EUR/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ETH",
          detales: [{exchanger: "RUR/ETH", precent: "12.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "BTC",
          detales: [{exchanger: "EUR/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ETH",
          detales: [{exchanger: "RUR/ETH", precent: "12.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "BTC",
          detales: [{exchanger: "EUR/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ETH",
          detales: [{exchanger: "RUR/ETH", precent: "12.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        },
        {
          title: "ELC",
          detales: [{exchanger: "USD/ELC", precent: "20.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"},{exchanger: "USD/BTC", precent: "14.872544.2 %", time: "24 hour", coin: "BTC 1455698.6"}]
        }
      ]
    }
  },
  methods: {
    ShowHidden: function (i){
      let answer = document.getElementsByClassName("select")[i];
      if(!answer.classList.contains("hidden")) {
        answer.className += " hidden";
      }
      else {
        answer.classList.remove("hidden");
      }
    }
  }
}
</script>

<style scoped>
  .search_block{
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-gap: 8px;
    border-bottom: 1px solid #bfc4c4;
    padding-bottom: 15px;
  }
  .search_block > *{
    height: 25px;
    line-height: .8;
    font-size: 12px;
    border-radius: 2px;
  }
  .search_block > input{
    margin-right: 5px;
  }
  .selects_block > .select > h5{
    background-color: #eae9e9;
    padding: 5px;
    cursor: pointer;
    position: relative;
    color: #656464;
  }
  .selects_block > .select{
    display: block;
    width: 100%;
    float: left;
  }
  .selects_block > .select > h5{
    height: 50px;
    line-height: 1.9;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .selects_block > .select > h5:before{
    content: "\27A4";
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 15px;
    color: #acaaaa;
    transform: rotate(-90deg);
  }
  .selects_block > .hidden > h5:before{
    content: "\27A4";
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 15px;
    color: #acaaaa;
    transform: rotate(90deg);
  }
  .selects_block > .hidden{
    height: 60px;
    overflow: hidden;
  }

  .selects_block > .select > .option{
    padding: 10px;
    border-bottom: 1px solid #efeded;
    height: 60px;
    cursor: pointer;
  }
  .selects_block > .select > .active{
    background-color: #a2e8e8;
  }
  .selects_block > .select > .option:hover{
    background-color: #f3f3f3;
  }
  .selects_block > .select > .option:last-child{
    border: 0;
  }
  .selects_block > .select > .option p{
    line-height: 1;
    font-size: 11px;
    display: block;
    width: 100%;
    clear: both;
    color: #033d6b;
    font-weight: bold;
  }

  .selects_block > .select > .option > p > .left{
    float: left;
  }
  .selects_block > .select > .option > p:first-child >.right{
    color: #086952;
  }
  .selects_block > .select > .option > p >.right{
    float: right;
    text-align: right;
  }
  .selects_block > .select > .option > p > .right{

  }

</style>