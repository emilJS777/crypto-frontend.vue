<template>
  <div id="contacts">
      <v-header/>
      <v-upper-section/>
      <v-bottom-section/>
      <v-footer-menu/>
  </div>
</template>

<script>
import VUpperSection from "@/components/Guest/contacts/v-upper-section";
import VHeader from "../_general/v-header";
import VBottomSection from "@/components/Guest/contacts/v-bottom-section";
import VFooterMenu from "@/components/_general/v-footer-menu";
export default {
  name: "index",
  components: {VFooterMenu, VBottomSection, VHeader, VUpperSection}
}
</script>

<style scoped>
  #contacts{
    padding-top: 80px;
    background-color: #f7f8fa;
  }
</style>