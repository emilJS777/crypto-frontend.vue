<template>
  <div id="buy_sell">
    <v-header/>
    <VBuySell class="buySellContent "/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VBuySell from "../../_general/buysell";
export default {
name: "index",
  components: {VHeader, VBuySell}
}
</script>

<style scoped>
  .buySellContent{
    margin-top: 60px;
  }
</style>