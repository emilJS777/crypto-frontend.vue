<template>
  <div class="proof-of-identity-document">
    <v-header/>
    <v-proof-of-identity-document/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VProofOfIdentityDocument from "./v-proof-of-identity-document";
export default {
  name: "index",
  components:{VProofOfIdentityDocument, VHeader}
}
</script>

<style scoped>
.proof-of-identity-document{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>