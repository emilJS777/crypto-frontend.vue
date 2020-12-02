<template>
  <div id="buy_sell">
    <v-header active="buysell"/>
    <v-sub-header/>
    <VBuySell class="buySellContent"/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VBuySell from "../../_general/buysell";
export default {
name: "index",
  components: {VSubHeader, VHeader, VBuySell}
}
</script>

<style scoped>
  .buySellContent{
    margin-top: -60px !important;
  }
</style>