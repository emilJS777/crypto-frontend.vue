<template>
  <div id="k7_api">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-info-section/>
    <div class="container">
      <div class="row mt-5 pb-5">
        <v-col-info-section
            title="REST API"
            desc="Basic API for quick access to K7.Crypto market data and automated trade management."
            logo="https://static.cex.io/img/pages/rest.svg"
        />
        <v-col-info-section
            title="WebSocket API"
            desc="A useful tool with full trading functionality for professional traders."
            logo="https://static.cex.io/img/pages/ws.svg"
        />
        <v-col-info-section
            title="FIX API"
            desc="Best solution for institutional traders to connect trading systems to a source of Bitcoin liquidity."
            logo="https://static.cex.io/img/pages/fix.svg"
        />
      </div>
    </div>
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VUpperCurrencyLayer from "../../_general/v-upper-currency-layer";
import VHeaderMin from "../_general/v-header-min";
import VFooterMenu from "../../_general/v-footer-menu";
import VInfoSection from "./v-info-section";
import VColInfoSection from "./v-col-info-section";
export default {
  name: "index",
  components: {VColInfoSection, VInfoSection, VFooterMenu, VUpperCurrencyLayer, VHeaderMin, VQuickCommunicationBlock}
}
</script>

<style scoped>

</style>