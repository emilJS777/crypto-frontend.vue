<template>
  <div id="bitcoin_calculator">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-calculator-section/>
    <v-footer-menu/>
  </div>
</template>

<script>
  import VUpperCurrencyLayer from "../../_general/v-upper-currency-layer";
  import VFooterMenu from "../../_general/v-footer-menu";
  import VHeaderMin from "../_general/v-header-min";
  import VCalculatorSection from "./v-calculator-section";

  export default {
name: "index",
  components:{
    VCalculatorSection,
    VFooterMenu,
    VUpperCurrencyLayer,
    VHeaderMin
  }
}
</script>

<style scoped>

</style>