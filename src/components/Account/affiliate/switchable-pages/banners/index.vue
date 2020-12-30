<template>
  <div class="banners mt-5">
    <h4 class="heading_darkBlue text-center">Banners</h4>
    <v-banner-block
      img="https://cex.io/rb/CEX-3-336x280.png"
    />
    <v-banner-block
      img="https://cex.io/rb/CEX-3-336x280.png"
    />
    <v-banner-block
      img="https://cex.io/rb/CEX-3-336x280.png"
    />
  </div>
</template>

<script>
import VBannerBlock from "./v-banner-block";
export default {
name: "index",
  components: {VBannerBlock}
}
</script>

<style scoped>

</style>