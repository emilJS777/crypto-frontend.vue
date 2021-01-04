<template>
  <div id="logal_security">
    <v-header/>
    <v-legal-and-security-documents/>
    <v-licenses-and-certificates/>
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../_general/quick-communication-block";
import VHeader from "../_general/v-header";
import VLegalAndSecurityDocuments from "@/components/Guest/legal-and-security/v-legal-and-security-documents";
import VFooterMenu from "@/components/_general/footer-menu/index";
import VLicensesAndCertificates from "@/components/Guest/legal-and-security/v-licenses-and-certificates";
export default {
  name: "index",
  components: {VLicensesAndCertificates, VFooterMenu, VLegalAndSecurityDocuments, VHeader,VQuickCommunicationBlock}
}
</script>

<style scoped>

</style>