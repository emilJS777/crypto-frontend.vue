s<template>
  <div id="guest">
    <v-header/>
    <v-face-section/>
    <v-top-crypto-section/>
    <v-buy-crypto-section/>
    <v-trading-info-section/>
    <v-about-us-section/>
    <v-description-section/>
    <v-in-the-community/>
    <v-footer-menu/>
    <v-loader/>
    <v-quick-communication-block/>
  </div>
</template>

<script>

import vHeader from "../_general/v-header"
import vFaceSection from "./v-face-section"
import vTopCryptoSection from "./v-top-crypto-section"
import vBuyCryptoSection from "./v-buy-crypto-section"
import vTradingInfoSection from "./v-trading-info-section"
import vAboutUsSection from "./v-about-us-section"
import vDescriptionSection from "./v-description-section"
import vInTheCommunity from "./v-inThe-community"
import vFooterMenu from "../../_general/v-footer-menu"
import VLoader from "../../_general/v-loader";
import VQuickCommunicationBlock from "../../_general/quick-communication-block/v-quick-communication-block";

export default {
  name: "index",
  components:{
    VQuickCommunicationBlock,
    VLoader,
    vHeader,
    vFaceSection,
    vTopCryptoSection,
    vBuyCryptoSection,
    vTradingInfoSection,
    vAboutUsSection,
    vDescriptionSection,
    vInTheCommunity,
    vFooterMenu
  }
}
</script>

<style scoped>

</style>