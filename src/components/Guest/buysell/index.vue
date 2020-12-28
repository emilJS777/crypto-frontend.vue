<template>
  <div id="buy_sell">
    <v-header/>
    <VBuySell class="buySellContent "/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";

import VHeader from "../_general/v-header";
import VBuySell from "../../_general/buysell";
export default {
name: "index",
  components: {VHeader, VBuySell, VQuickCommunicationBlock}
}
</script>

<style scoped>
  .buySellContent{
    margin-top: 60px;
  }
</style>