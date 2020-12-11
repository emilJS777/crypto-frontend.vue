<template>
  <div id="blog">
    <v-header/>
    <div class="container">
      <div class="row mt-5">
        <v-blog-menu/>
        <v-blog-menu/>
        <v-blog-menu/>
        <v-blog-menu/>
        <v-blog-menu/>
      </div>
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VBlogMenu from "./v-blog-menu";
import VFooterMenu from "../_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VBlogMenu, VHeader}
}
</script>

<style scoped>
  #blog{
    background-color: #f6f6f6;
    min-height: 100vh;
  }
</style>