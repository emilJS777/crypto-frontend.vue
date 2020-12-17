<template>
  <div class="lading_page_block">
    <router-link to="/" class="img_block">
      <img src="https://cex.io/rl/landing-0.jpg" alt="">
    </router-link>
    <div class="bottom_block">
      <input type="text" disabled="disabled" value="https://K7.Crypto/r/0/up133935344/0">
      <button class="btn btn_blue">COPY LINK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-lading-page-block"
}
</script>

<style scoped>
.lading_page_block{
  background-color: #fafafa;
  border: 1px solid #c3c3c3;
}
.lading_page_block > *{
  display: block;
}
.lading_page_block > div > img{
  width: 100%;
  height: 100%;
}
.bottom_block{
  padding: 20px;
}
.bottom_block > *{
  display: block;
  width: 100%;
  margin-top: 5px;
  padding: 10px;
}
</style>