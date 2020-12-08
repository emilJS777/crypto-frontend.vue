<template>
  <div id="support">
    <v-header/>
    <v-collections/>
  </div>
</template>

<script>
import VHeader from "./v-header";
import VCollections from "./v-collections";
export default {
name: "index",
  components: {VCollections, VHeader}
}
</script>

<style scoped>
#support{
  background-color: #f3f3f3;
  padding-bottom: 40px;
}
</style>