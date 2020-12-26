<template>
  <div class="proof-of-identity-document-upload">
    <v-header/>
    <v-proof-of-identity-document-upload/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VProofOfIdentityDocumentUpload from "./v-proof-of-identity-document-upload";
export default {
name: "index",
  components:{VProofOfIdentityDocumentUpload, VHeader}
}
</script>

<style scoped>
.proof-of-identity-document-upload{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>