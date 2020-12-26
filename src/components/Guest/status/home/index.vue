<template>
  <div id="status" class="container">
    <v-head/>
    <v-services-content/>
    <v-opening-blocks-content/>
    <v-past-incidents-content/>
    <div>
      <hr>
      <router-link to="/status/incident-history" class="heading_lightBlue"> ⟵ Incident History</router-link>
    </div>
  </div>
</template>

<script>
import VHead from "../head/v-head";
import VServicesContent from "./services-content/v-services-content";
import VOpeningBlocksContent from "./opening-blocks-content/v-opening-blocks-content";
import VPastIncidentsContent from "./past-incidents-content/v-past-incidents-content";
export default {
name: "index",
  components: {VPastIncidentsContent, VOpeningBlocksContent, VServicesContent, VHead}
}
</script>

<style scoped>
#status{
  padding-bottom: 40px;
}
div{
}
</style>