<template>
  <div id="profile">
    <v-header/>
    <v-sub-header/>
    <v-content-tabs/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VContentTabs from "./v-content-tabs";
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VFooterMenu from "../../_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VSubHeader, VHeader, VContentTabs}
}
</script>

<style scoped>
  #profile{
    background-color: #f6f3f369;
  }
</style>