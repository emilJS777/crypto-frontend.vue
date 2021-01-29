<template>
  <div class="international-passport-information">
    <v-header/>
    <v-international-passport-information/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VInternationalPassportInformation from "./v-international-passport-information";
export default {
name: "index",
  components: {VInternationalPassportInformation, VHeader}
}
</script>

<style scoped>
.international-passport-information{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>