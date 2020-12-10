<template>
  <div id="support">
    <v-header/>
    <v-collections-menu
        :collections="collections"
    />
  </div>
</template>

<script>

import VHeader from "../_general/v-header";
import VCollectionsMenu from "./v-collections-menu";
import VCollectionsData from "../_data/_data";

export default {
  name: "index",
  components: {VCollectionsMenu, VHeader},
  data(){
    return{
      collections: VCollectionsData,
      collectionsId: false
    }
  }
}
</script>

<style scoped>
#support{
  background-color: #f3f3f3;
  padding-bottom: 40px;
}
</style>