<template>
  <div id="mobile">
    <v-header/>
    <v-face-section/>
    <v-faq-section/>
    <v-slider-section/>
    <v-features-benefits-section/>
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
  import VQuickCommunicationBlock from "../../_general/quick-communication-block";
  import VHeader from "../_general/v-header";
  import VFaceSection from "@/components/Guest/mobile/v-face-section";
  import VFaqSection from "@/components/Guest/mobile/v-faq-section";
  import VSliderSection from "@/components/Guest/mobile/v-slider-section";
  import VFooterMenu from "@/components/_general/footer-menu/index";
  import VFeaturesBenefitsSection from "@/components/Guest/mobile/v-features-benefits-section";

  export default {
  name: "index",
    components: {VFeaturesBenefitsSection, VSliderSection, VFooterMenu, VFaqSection, VFaceSection, VHeader, VQuickCommunicationBlock}
  }
</script>

<style scoped>

</style>