<template>
  <div id="sub_collections">
    <v-header/>
    <v-sub-collections/>
  </div>
</template>

<script>
import VSubCollections from "./v-sub-collections";
import VHeader from "../_general/v-header";
export default {
  name: "index",
  components: {VHeader, VSubCollections}
}
</script>

<style scoped>
#sub_collections{
  background-color: #f6f6f6;
}
</style>