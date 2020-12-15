<template>
  <div id="buysell">
    <v-heading class="mt-5 pt-5"/>
    <div class="row">
      <div class="col-12 mt-4">
        <div class="select_block_buy_for">
          <div class="buy">
            <span class="text_greey text_big">Buy</span>
            <v-select :priceTag='["BTC","ETH","ELC"]'/>
          </div>
          <div class="for">
            <span class="text_greey text_big">For</span>
            <v-select :priceTag='["USD","EUR","FTS"]'/>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-3 mt-2">
          <v-different-purchase-card/>
        </div>
        <div class="col-3 mt-2">
          <v-popular-purchase-card
              :price="200"/>
        </div>
        <div class="col-3 mt-2">
          <v-popular-purchase-card
              :price="500"/>
        </div>
        <div class="col-3 mt-2">
          <v-popular-purchase-card
              :price="1000"/>
        </div>
      </div>
    </div>
    <v-bottom-about-us/>
  </div>
</template>

<script>
import VBottomAboutUs from "./v-bottom-about-us";
import vHeading from "./v-heading";
import vSelect from "../../_general/v-select"
import vPopularPurchaseCard from "./v-popular-purchase-card"
import vDifferentPurchaseCard from "./v-different-purchase-card"

export default {
  name: "index",
  components: {
    vSelect,
    VBottomAboutUs,
    vHeading,
    vDifferentPurchaseCard,
    vPopularPurchaseCard
  }
}
</script>

<style scoped>
#buysell{
  overflow-x: hidden;
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