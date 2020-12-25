<template>
  <div id="status">
    <v-head/>
    <v-services-content/>
    <v-opening-blocks-content/>
  </div>
</template>

<script>
import VHead from "../head/v-head";
import VServicesContent from "./services-content/v-services-content";
import VOpeningBlocksContent from "./opening-blocks-content/v-opening-blocks-content";
export default {
name: "index",
  components: {VOpeningBlocksContent, VServicesContent, VHead}
}
</script>

<style scoped>

</style>