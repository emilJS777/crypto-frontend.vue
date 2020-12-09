<template>
  <div id="info">
    <v-header/>
    <v-info-section/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VInfoSection from "./v-info-section";
export default {
name: "index",
  components: {VInfoSection, VHeader}
}
</script>

<style scoped>
#info{
  background-color: #f3f3f3;
  padding-bottom: 40px;
}
</style>