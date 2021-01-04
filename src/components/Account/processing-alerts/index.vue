<template>
  <div id="processing_alerts">
    <v-header/>
    <v-sub-header/>
    <v-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VContent from "./v-content";
import VFooterMenu from "../../_general/footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VSubHeader, VHeader, VContent}
}
</script>

<style scoped>

</style>