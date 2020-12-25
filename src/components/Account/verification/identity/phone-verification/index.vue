<template>
  <div class="phone_verification">
    <v-header/>
    <v-phone-verification/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VPhoneVerification from "./v-phone-verification";
export default {
  name: "index",
  components:{VPhoneVerification, VHeader}
}
</script>

<style scoped>
.phone_verification{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>