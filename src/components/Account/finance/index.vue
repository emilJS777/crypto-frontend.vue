<template>
  <div id="finance">
    <v-header active="finance"/>
    <v-sub-header/>
    <v-switch-content/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VSwitchContent from "./v-switch-content";
export default {
  name: "index",
  components: {VSwitchContent, VSubHeader, VHeader}
}
</script>

<style scoped>

</style>