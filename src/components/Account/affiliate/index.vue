<template>
  <div id="affiliate">
    <v-header active="affiliate"/>
    <v-sub-header/>
    <v-tabs-section/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VTabsSection from "./v-tabs-section";
import VFooterMenu from "../../_general/v-footer-menu";
export default {
  name: "index",
  components: {VFooterMenu, VTabsSection, VSubHeader, VHeader}
}
</script>

<style scoped>

</style>