<template>
  <div id="buysell">
    <VHeader/>
    <VBuySell/>
  </div>
</template>

<script>
import VBuySell from "../../_general/buysell";
import VHeader from "../_general/v-header";

export default {
  name: "index",
  components: {
    VBuySell,
    VHeader
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