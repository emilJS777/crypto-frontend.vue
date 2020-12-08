<template>
  <div id="verification">
    <v-header/>
    <v-heading/>
    <v-content/>
  </div>
</template>

<script>
import VHeader from "./v-header";
import VHeading from "./v-heading";
import VContent from "./v-content";
export default {
name: "index",
  components: {VHeading, VHeader, VContent}
}
</script>

<style scoped>
#verification{
  background-color: #e8e8e8;
}
</style>