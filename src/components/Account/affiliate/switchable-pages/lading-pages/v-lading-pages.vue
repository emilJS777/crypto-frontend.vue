<template>
  <div class="lading_pages mt-5">
    <h4 class="heading_darkBlue text-center">Landing pages</h4>
    <div class="lading_pages_block mt-5">
      <v-lading-page-block/>
      <v-lading-page-block/>
      <v-lading-page-block/>
      <v-lading-page-block/>
      <v-lading-page-block/>
    </div>
  </div>
</template>

<script>
import VLadingPageBlock from "./v-lading-page-block";
export default {
name: "v-lading-pages",
  components: {VLadingPageBlock}
}
</script>

<style scoped>
.lading_pages_block{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
}
</style>