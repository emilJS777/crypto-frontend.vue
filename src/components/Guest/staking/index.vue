<template>
  <div id="staking">
    <v-header/>
    <v-face-section/>
    <v-calculate-earnings/>
    <v-all-available-coins />
    <v-faq/>
    <v-footer-menu/>
  </div>
</template>

<script>

  import VHeader from "../_general/v-header";
  import VFaceSection from "./v-face-section";
  import VFooterMenu from "@/components/_general/v-footer-menu";
  import VCalculateEarnings from "./v-calculate-earnings";
  import VAllAvailableCoins from "./v-all-available-coins";
  import VFaq from "./v-faq";

export default {
  name: "index",
  components: {VCalculateEarnings, VFooterMenu, VFaceSection, VHeader, VAllAvailableCoins, VFaq}
}
</script>

<style scoped>

</style>