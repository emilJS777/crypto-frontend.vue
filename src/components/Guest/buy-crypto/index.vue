<template>
  <div id="buy_ethereum" class="container mt-5">
    <v-header/>
    <div class="row">
      <v-description/>
    </div>
    <v-heading/>
    <div class="row">
      <div class="col-3">
        <v-popular-purchase-card price="100"/>
      </div>
      <div class="col-3">
        <v-popular-purchase-card price="500"/>
      </div>
      <div class="col-3">
        <v-popular-purchase-card price="1000"/>
      </div>
      <div class="col-3">
        <v-different-purchase-card/>
      </div>
    </div>
    <div class="row">
      <v-description/>
    </div>
    <div class="row">
      <v-description/>
      <router-link to="/buysell" class="btn btn_blue">Buy Bitcoins</router-link>
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VPopularPurchaseCard from "../../_general/buysell/v-popular-purchase-card";
import VDifferentPurchaseCard from "../../_general/buysell/v-different-purchase-card";
import VDescription from "./v-description";
import VHeader from "../_general/v-header";
import VHeading from "@/components/_general/buysell/v-heading";
import VFooterMenu from "../../_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VHeading, VHeader, VDescription, VDifferentPurchaseCard, VPopularPurchaseCard}
}
</script>

<style scoped>

</style>