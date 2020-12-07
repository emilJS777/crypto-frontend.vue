<template>
  <div id="social_networks">
    <v-header/>
    <v-sub-header/>
    <v-email-section/>
    <v-social-networks-section/>
    <v-user-id/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VFooterMenu from "../../_general/v-footer-menu";
import VEmailSection from "./v-email-section";
import VSocialNetworksSection from "./v-social-networks-section";
import VUserId from "./v-user-id";
export default {
name: "index",
  components: {VUserId, VSocialNetworksSection, VEmailSection, VFooterMenu, VSubHeader, VHeader}
}
</script>

<style scoped>
#social_networks{
  background-color: #f6f6f6;
}
</style>