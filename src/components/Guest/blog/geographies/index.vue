<template>
  <div id="geographies">
    <v-header/>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <v-left-sidebar/>
        </div>
        <div class="col-9">
          <v-small-blog/>
          <v-small-blog/>
          <v-small-blog/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VLeftSidebar from "../_general/v-left-sidebar";
import VSmallBlog from "../_general/v-small-blog";
export default {
  name: "index",
  components: {VSmallBlog, VLeftSidebar, VHeader}
}
</script>

<style scoped>

</style>