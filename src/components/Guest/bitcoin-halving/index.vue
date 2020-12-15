<template>
  <div id="bitcoin_halving">
    <v-header/>
    <v-face-section/>
    <div class="container pt-5">
      <h1 class="heading_darkBlue text-center">FAQ</h1>
      <v-faq-section/>
      <v-faq-section/>
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VFaceSection from "./v-face-section";
import VFooterMenu from "../../_general/v-footer-menu";
import VFaqSection from "./v-faq-section";
export default {
name: "index",
  components: {VFaqSection, VFooterMenu, VFaceSection, VHeader}
}
</script>

<style scoped>

</style>