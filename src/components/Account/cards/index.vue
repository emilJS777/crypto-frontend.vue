<template>
  <div id="cards">
    <v-header active="cards"/>
    <v-sub-header/>
    <v-cards-content/>
    <v-card-section/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VCardsContent from "./v-cards-content";
import VFooterMenu from "../../_general/footer-menu";
import VCardSection from "./v-card-section";
export default {
  name: "index",
  components: {VCardSection, VFooterMenu, VCardsContent, VSubHeader, VHeader}
}
</script>

<style scoped>
  #cards{
    background-color: #f6f3f394;
  }
</style>