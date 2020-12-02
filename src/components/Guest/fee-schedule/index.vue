<template>
  <div id="fee_schedule">
    <v-upper-currency-layer/>
    <v-header-min/>
    <v-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
  import VHeaderMin from "../_general/v-header-min";
  import VUpperCurrencyLayer from "@/components/_general/v-upper-currency-layer";
  import VContent from "./v-tab-content";
  import VFooterMenu from "@/components/_general/v-footer-menu";
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