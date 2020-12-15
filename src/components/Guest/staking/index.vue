<template>
  <div id="staking">
    <v-header/>
    <v-face-section/>
    <v-calculate-earnings/>
    <v-all-available-coins />
        <div class="container mt-5">
          <h1 class="heading_darkBlue">FAQ</h1>
          <v-faq/>
          <v-faq/>
        </div>
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
h1{
  text-align: center;
}
.faq{
  width: 60%;
  padding: 5px;
  border-bottom: 1px solid #d7d3d3;
  display: block;
  margin: 0 auto;
}
</style>