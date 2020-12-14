<template>
  <div id="bitcoin_trading">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeaderMin from "../_general/v-header-min";
import VUpperCurrencyLayer from "../../_general/v-upper-currency-layer";
import VFooterMenu from "../../_general/v-footer-menu";

export default {
name: "index",
  components:{
    VFooterMenu,
    VUpperCurrencyLayer,
    VHeaderMin
  }
}

</script>

<style scoped>

</style>