<template>
  <div id="certain_blog">
    <v-header/>
    <div class="container">
      <div class="row">
        <div class="col-9">
          <v-blog/>
        </div>
        <div class="col-3">
          <v-left-sidebar/>
        </div>
      </div>
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VLeftSidebar from "../_general/v-sidebar";
import VBlog from "./v-blog";
import VFooterMenu from "../_general/v-footer-menu";
export default {
  name: "index",
  components: {VFooterMenu, VBlog, VLeftSidebar, VHeader}
}
</script>

<style scoped>
.col-3{
  border-left: 1px solid #d6d6d6;
}
</style>