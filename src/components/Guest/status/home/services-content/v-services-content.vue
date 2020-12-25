<template>
  <div class="service_content mt-3 container">
    <v-service-board/>
    <v-service-board/>
    <v-service-board/>
    <v-service-board/>
  </div>
</template>

<script>
import VServiceBoard from "./v-service-board";
export default {
name: "v-services-content",
  components: {VServiceBoard}
}
</script>

<style scoped>
.service_content{
  width: 80%;
}
</style>