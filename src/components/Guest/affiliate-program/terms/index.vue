<template>
  <div class="terms">
    <v-header/>
    <v-document
      title="Terms of Use"
      data="08.12.1998 Dectember 08"
      :subdescription="[
          {title: 'policy terms of use', descriptions: ['The following Affiliate Program Terms of Use (the “Affiliate Program Terms”) govern your participation in the CEX.IO’s affiliate program (the “Affiliate Program”).\n'+
'These Affiliate Program Terms supplement, and form part of, our standard terms of use, the current version of which is located at: https://cex.io/terms (“Terms of Use”). Accordingly, capitalized terms used, but not defined in these Affiliate Program Terms, have the meanings set out in the Terms of Use.\n'+
'Please refer to our Privacy Policy for information on how we collect, use and disclose information from our customers. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.','As used herein, “CEX.IO” refers to the company CEX.IO LTD Company of 24th Floor One Canada Square, Canary Wharf London E14 5AB, United Kingdom, including but not limited to, its owners, directors, investors, officers, employees, agents or other related parties, unless otherwise provided herein.']},
          {title: 'ters tems', descriptions: ['sldkfldsfm sdfkl sdlfkms dlgnf sdsfs']}
      ]"
    />
  </div>
</template>

<script>
import VHeader from "../../_general/v-header";
import VDocument from "../../../_general/legal-security-doc/v-document";
export default {
name: "index",
  components: {VDocument, VHeader}
}
</script>

<style scoped>
.terms{
  padding-top: 10px;
  background-color: #f3f3f3;
  min-height: 100vh;
}
</style>