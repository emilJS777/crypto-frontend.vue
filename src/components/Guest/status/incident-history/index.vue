<template>
  <div class="incident_history">
    <v-head/>
    <h4 class="heading_darkBlue">Incident History</h4>
    <v-data-pages/>
    <v-events-by-date/>
    <v-events-by-date/>
    <div class="mt-5 container">
      <hr/>
      <router-link to="/status" class="heading_lightBlue"> ⟵ Current Status</router-link>
    </div>
  </div>
</template>

<script>
import VHead from "../head/v-head";
import VDataPages from "./v-data-pages";
import VEventsByDate from "./events-by-date/v-events-by-date";
export default {
  name: "index",
  components: {VEventsByDate, VDataPages, VHead}
}
</script>

<style scoped>
.incident_history{
  padding-bottom: 30px;
}
h4{
  text-align: center;
}
</style>