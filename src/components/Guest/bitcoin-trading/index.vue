<template>
  <div id="bitcoin_trading">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeaderMin from "../_general/v-header-min";
import VUpperCurrencyLayer from "../../_general/upper-currency-layer";
import VFooterMenu from "../../_general/footer-menu";
import VContent from "./v-content";

export default {
name: "index",
  components:{
    VFooterMenu,
    VUpperCurrencyLayer,
    VHeaderMin,
    VContent
  }
}

</script>

<style scoped>

</style>