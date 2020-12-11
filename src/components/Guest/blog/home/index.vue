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
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VBlogMenu from "./v-blog-menu";
export default {
name: "index",
  components: {VBlogMenu, VHeader}
}
</script>

<style scoped>
  #blog{
    background-color: #f6f6f6;
    min-height: 100vh;
    padding-bottom: 20px;
  }
</style>