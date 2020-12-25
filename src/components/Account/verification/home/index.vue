<template>
  <div class="verification_home">
    <v-header/>
    <v-heading/>
    <v-content/>
  </div>
</template>

<script>
import VHeader from "../v-header";
import VHeading from "./v-heading";
import VContent from "./v-content"
export default {
name: "index",
  components: { VHeading, VHeader, VContent}
}
</script>

<style scoped>
.verification_home{
  background-color: #f3f3f3;
}
</style>