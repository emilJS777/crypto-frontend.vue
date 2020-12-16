<template>
  <div class="last_rewards">
    <h5 class="heading_darkBlue">Last rewards</h5>
    <v-bar-chart/>
  </div>
</template>

<script>
import VBarChart from "./v-bar-chart";
export default {
  name: "v-last-rewards",
  components: {VBarChart}
}
</script>

<style scoped>
.last_rewards{
  background-color: #fff;
  padding: 15px;
  border-radius: 6px;
}
</style>