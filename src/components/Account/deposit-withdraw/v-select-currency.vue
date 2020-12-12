<template>
  <div class="select_currency_block">
    <div class="select_input_block">
      <v-select :priceTag="['USD','EUR','RUR']"/>
      <input type="number" class="form-control" placeholder="0">
    </div>
    <div class="price_tags_select_block">
      <ul>
        <li>USD</li>
        <li>EUR</li>
        <li>GBP</li>
        <li>RUB</li>
        <li>BTC</li>
      </ul>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/_general/v-select";
export default {
name: "v-select-currency",
  components:{
    VSelect
  }
}
</script>

<style scoped>
  .select_input_block{
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .select_input_block > input{
    height: 100%;
    text-align: right;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0;
  }
  .select_input_block > input:focus{
    outline: 0 !important;
    box-shadow: none !important;
  }
  .price_tags_select_block{
    border-bottom: 1px solid #ccc;
  }
  .price_tags_select_block > ul{
    display: table;
    margin: 0 auto;
  }
  .price_tags_select_block > ul >li{
    display: inline-block;
    margin: 10px;
    color: #d9d9d9;
  }
  .price_tags_select_block > ul >li:hover{
    color: #fff;
  }
</style>