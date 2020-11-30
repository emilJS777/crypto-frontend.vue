<template>
  <div id="limits_commissions">
    <v-header/>
    <v-total-account-limits/>
    <v-limits-and-commissions/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "@/components/_general/v-header";
import VTotalAccountLimits from "@/components/Guest/limits-commissions/v-total-account-limits";
import VLimitsAndCommissions from "@/components/Guest/limits-commissions/v-limits-and-commissions";
import VFooterMenu from "@/components/_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VLimitsAndCommissions, VTotalAccountLimits, VHeader}
}
</script>

<style scoped>

</style>