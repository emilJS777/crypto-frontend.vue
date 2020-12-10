<template>
<div id="edition">
  <v-header/>
  <v-edition/>
</div>
</template>

<script>
import VHeader from "../_general/v-header";
import VEdition from "./v-edition";
export default {
  name: "index",
  components: {VEdition, VHeader}
}
</script>

<style scoped>
#edition{
  background-color: #f6f6f6;
}
</style>