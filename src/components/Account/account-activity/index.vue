<template>
  <div id="account_activity">
    <v-header/>
    <v-sub-header/>
    <v-content/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VFooterMenu from "../../_general/v-footer-menu";
import VContent from "./v-content";
export default {
name: "index",
  components: {VFooterMenu, VSubHeader, VHeader,VContent}
}
</script>

<style scoped>

</style>