<template>
  <div class="face_section">
    <h1 class="heading_darkBlue">
      Endless Opportunity to
      <p class="heading_lightBlue">Earn Money</p>
    </h1>
    <p class="text_greey">with the CEX.IO Affiliate Program</p>
    <router-link to="/login" class="btn btn_blue">Become an Affiliate</router-link>
  </div>
</template>

<script>
export default {
name: "v-face-section"
}
</script>

<style scoped>
  .face_section{
    padding-top: 100px;
    padding-left: 150px;
    height: 500px;
    background-image:url(~@/assets/img/top-section-banner.png);
    background-size: 100% 100%;
  }
  h1{
    font-size: 60px;
  }
  a{
    font-size: 23px;
    padding: 15px;
  }
</style>