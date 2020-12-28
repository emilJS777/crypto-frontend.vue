<template>
  <div id="prices">
    <v-header/>
    <v-crypto-currency-prices/>
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VHeader from "../_general/v-header";
import VFooterMenu from "../../_general/v-footer-menu";
import VCryptoCurrencyPrices from "./v-crypto-currency-prices";
export default {
name: "index",
  components: {VCryptoCurrencyPrices, VFooterMenu, VHeader, VQuickCommunicationBlock}
}
</script>

<style scoped>
#prices{
  padding-top: 90px;
}
</style>