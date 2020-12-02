<template>
  <div class="top_currency_menu">
    <div class="container pt-2">
      <div class="row">
        <div class="col-12">
          <nav class="navigation">
            <ul>
              <li class=" box_shadow_hover"
                  v-for="(currenc, index) in currency" :key="index"
              v-bind:class="index === 0 ? 'active' : ''">
                <p>{{ currenc.currencyTag }}</p>
                <p>{{ currenc.price }}</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-top-currency-menu",
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

  .navigation > ul{
    display: table;
    margin: 0 auto;
  }
  .navigation > ul > li{
    display: inline-block;
    margin-left: 15px;
    text-align: center;
    background-color: #eae9e9;
    padding: 1px 8px;
    border: 2px;
    transition: .2s;
    border-radius: 2px;
  }
  .navigation > ul > li:hover, .navigation > ul > li.active{
    border-bottom: 4px solid #42a5a5;
    color: #4a4b4b;
  }
  .navigation > ul > li > p{
    line-height: 1;
    margin: 10px;
    font-size: 12px;
    font-weight: bold;
  }
</style>