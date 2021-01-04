<template>
  <div id="finance">
    <v-header active="finance"/>
    <v-sub-header/>
    <v-switch-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VSwitchContent from "./v-switch-content";
import VFooterMenu from "../../_general/footer-menu";
export default {
  name: "index",
  components: {VFooterMenu, VSwitchContent, VSubHeader, VHeader}
}
</script>

<style scoped>

</style>