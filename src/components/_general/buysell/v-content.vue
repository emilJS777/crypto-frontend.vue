<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 mt-5">
        <h1 class="heading_darkBlue">
          Buy Crypto with VISA or Mastercard in USD
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <div class="select_block_buy_for">
          <div class="buy">
            <span class="text_greey text_big">Buy</span>
            <v-select/>
          </div>
          <div class="for">
            <span class="text_greey text_big">For</span>
            <v-select/>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4 mt-2">
        <v-different-purchase-card/>
      </div>
      <div class="col-4 mt-2">
        <v-popular-purchase-card/>
      </div>
      <div class="col-4 mt-2">
        <v-popular-purchase-card/>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "../general/v-select"
  import vPopularPurchaseCard from "./v-popular-purchase-card"
  import vDifferentPurchaseCard from "./v-different-purchase-card"

export default {
  name: "v-content",
  components:{
    vSelect,
    vPopularPurchaseCard,
    vDifferentPurchaseCard
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .select_block_buy_for{
    display: block;
    width: 400px;
    margin: 0 auto;
    white-space: nowrap;
  }
  .select_block_buy_for > div{
    display: inline-block;
    width: 50%;
    white-space: normal;
    padding: 5px;
  }

</style>