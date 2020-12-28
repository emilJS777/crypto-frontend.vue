<template>
  <div id="about">
    <div class="container">
      <v-header/>
      <v-heading/>
      <v-img-info-section/>
      <v-about-us/>
      <v-img-info-section-two/>
      <v-img-info-section-tre/>
      <v-our-products-slider/>
      <v-our-values-section/>
      <v-our-history/>
      <v-footer-menu/>
      <v-quick-communication-block/>
    </div>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VHeader from "../_general/v-header";
import VHeading from "./v-heading";
import VImgInfoSection from "@/components/Guest/about/v-img-info-section";
import VAboutUs from "@/components/Guest/home/v-about-us-section";
import VImgInfoSectionTwo from "@/components/Guest/about/v-img-info-section-two";
import VImgInfoSectionTre from "@/components/Guest/about/v-img-info-section-tre";
import VOurValuesSection from "@/components/Guest/about/v-our-values-section";
import VFooterMenu from "@/components/_general/v-footer-menu";
import VOurProductsSlider from "@/components/Guest/about/v-our-products-slider";
import VOurHistory from "@/components/Guest/about/v-our-history-section";
export default {
name: "index",
  components: {
    VQuickCommunicationBlock,
    VOurHistory,
    VOurProductsSlider,
    VFooterMenu,
    VOurValuesSection,
    VImgInfoSectionTre,
    VImgInfoSectionTwo,
    VAboutUs,
    VImgInfoSection,
    VHeading,
    VHeader
  }
}
</script>

<style scoped>
  .container:first-child{
    padding-top: 120px !important;
  }
</style>