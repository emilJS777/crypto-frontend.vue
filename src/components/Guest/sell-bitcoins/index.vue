<template>
  <div id="sell_bitcoins">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-info-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VUpperCurrencyLayer from "../../_general/v-upper-currency-layer";
import VHeaderMin from "../_general/v-header-min";
import VFooterMenu from "../../_general/v-footer-menu";
import VInfoContent from "./v-info-content";
export default {
name: "index",
  components: {VInfoContent, VFooterMenu, VUpperCurrencyLayer, VHeaderMin}
}
</script>

<style scoped>

</style>