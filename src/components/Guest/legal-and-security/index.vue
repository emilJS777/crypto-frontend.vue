<template>
  <div id="logal_security">
    <v-header/>
    <v-legal-and-security-documents/>
    <v-licenses-and-certificates/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "@/components/_general/v-header";
import VLegalAndSecurityDocuments from "@/components/Guest/legal-and-security/v-legal-and-security-documents";
import VFooterMenu from "@/components/_general/v-footer-menu";
import VLicensesAndCertificates from "@/components/Guest/legal-and-security/v-licenses-and-certificates";
export default {
  name: "index",
  components: {VLicensesAndCertificates, VFooterMenu, VLegalAndSecurityDocuments, VHeader}
}
</script>

<style scoped>

</style>