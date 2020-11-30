<template>
  <div id="affiliate_program">
    <v-header/>
    <v-face-section/>
    <v-recommendations-and-rewards/>
    <v-slider-section/>
    <v-join-affiliates/>
    <v-why-join-affiliate-program/>
    <v-email-us-anytime/>
    <v-description-section/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "@/components/_general/v-header";
import VFaceSection from "@/components/Guest/affiliate-program/v-face-section";
import VRecommendationsAndRewards from "@/components/Guest/affiliate-program/v-recommendations-and-rewards";
import VFooterMenu from "@/components/_general/v-footer-menu";
import VJoinAffiliates from "@/components/Guest/affiliate-program/v-join-affiliates";
import VWhyJoinAffiliateProgram from "@/components/Guest/affiliate-program/v-why-join-affiliate-program";
import VEmailUsAnytime from "@/components/Guest/affiliate-program/v-email-us-section";
import VDescriptionSection from "@/components/Guest/home/v-description-section";
import VSliderSection from "@/components/Guest/affiliate-program/v-slider-section";
export default {
  name: "index",
  components: {
    VSliderSection,
    VDescriptionSection,
    VEmailUsAnytime,
    VWhyJoinAffiliateProgram,
    VJoinAffiliates, VFooterMenu, VRecommendationsAndRewards, VFaceSection, VHeader}
}
</script>

<style scoped>

</style>