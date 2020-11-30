<template>
  <div class="upper_currency_layer_block">
    <div class="container-fluid">
      <div class="row">
        <p>
          <a href="#"
             v-for="(currenc, index) in currency" :key="index">
            {{currenc.currencyTag}}: {{ currenc.price }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-upper-currency-layer",
  data(){
    return{
      currency:[
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'},
        {currencyTag: "BTC/USD", price: '18958.3'}
      ]
    }
  }
}
</script>

<style scoped>
  .upper_currency_layer_block{
    background-color: #011e3e;
  }
  .upper_currency_layer_block p{
    margin: 0;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
  a{
    color: #acaaaa !important;
    font-size: 13px;
    margin-left: 5px;
    border-left: 1px solid #acaaaa;
    padding-left: 5px;
  }
  a:first-child{
    border-left: 0;
  }
  a:hover{
    color: #42a5a5 !important;
  }
</style>