<template>
  <div id="limits_commissions">
    <v-header/>
    <v-total-account-limits/>
    <v-limits-and-commissions/>
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VHeader from "../_general/v-header";
import VTotalAccountLimits from "@/components/Guest/limits-commissions/v-total-account-limits";
import VLimitsAndCommissions from "@/components/Guest/limits-commissions/v-limits-and-commissions";
import VFooterMenu from "@/components/_general/footer-menu/index";
export default {
name: "index",
  components: {VFooterMenu, VLimitsAndCommissions, VTotalAccountLimits, VHeader, VQuickCommunicationBlock}
}
</script>

<style scoped>

</style>