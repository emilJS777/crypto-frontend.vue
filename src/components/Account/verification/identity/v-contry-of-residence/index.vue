<template>
  <div class="contry_of_residence">
    <v-header/>
    <v-contry-of-residence/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VContryOfResidence from "./v-contry-of-residence";
export default {
  name: "index",
  components: {VContryOfResidence, VHeader}
}
</script>

<style scoped>
.contry_of_residence{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>