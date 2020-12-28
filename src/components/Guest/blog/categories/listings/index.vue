<template>
  <div id="listings">
    <v-header active="listings"/>
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
    <v-footer-menu/>
    <v-quick-communication-block/>
  </div>
</template>

<script>
import VQuickCommunicationBlock from "../../../../_general/quick-communication-block";
import VHeader from "../../_general/v-header";
import VLeftSidebar from "../../_general/v-sidebar";
import VSmallBlog from "../../_general/v-small-blog";
import VFooterMenu from "../../_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VSmallBlog, VLeftSidebar, VHeader, VQuickCommunicationBlock}
}
</script>

<style scoped>
.col-3{
  border-right: 1px solid#d6d6d6;
}
</style>