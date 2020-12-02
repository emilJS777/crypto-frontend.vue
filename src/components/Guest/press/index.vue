<template>
  <div id="press">
    <v-header/>
    <v-face-section/>
    <v-editions/>
    <v-footer-menu/>
  </div>
</template>

<script>
import VFaceSection from "@/components/Guest/press/v-face-section";
import VHeader from "../_general/v-header";
import VFooterMenu from "@/components/_general/v-footer-menu";
import VEditions from "@/components/Guest/press/v-editor-and-editorial-select";
export default {
name: "index",
  components: {VEditions, VFooterMenu, VHeader, VFaceSection}
}
</script>

<style scoped>

</style>