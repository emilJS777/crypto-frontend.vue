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
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VHeader from "../_general/v-header";
import VFaceSection from "@/components/Guest/affiliate-program/v-face-section";
import VRecommendationsAndRewards from "@/components/Guest/affiliate-program/v-recommendations-and-rewards";
import VFooterMenu from "@/components/_general/footer-menu/index";
import VJoinAffiliates from "@/components/Guest/affiliate-program/v-join-affiliates";
import VWhyJoinAffiliateProgram from "@/components/Guest/affiliate-program/v-why-join-affiliate-program";
import VEmailUsAnytime from "@/components/Guest/affiliate-program/v-email-us-section";
import VDescriptionSection from "@/components/Guest/home/v-description-section";
import VSliderSection from "@/components/Guest/affiliate-program/v-slider-section";
export default {
  name: "index",
  components: {
    VQuickCommunicationBlock,
    VSliderSection,
    VDescriptionSection,
    VEmailUsAnytime,
    VWhyJoinAffiliateProgram,
    VJoinAffiliates, VFooterMenu, VRecommendationsAndRewards, VFaceSection, VHeader}
}
</script>

<style scoped>

</style>