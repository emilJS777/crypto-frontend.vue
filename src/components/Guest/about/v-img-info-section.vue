<template>
  <div class="img_info_section row mt-5">
    <div class="col-6 img_info_left">
      <img src="https://static.cex.io/landings/media/1x-our-mission-section-left-picture.png" alt="">
      <p class="text_greey">We are a regulated multi-functional cryptocurrency exchange established in 2013 and now serving over 3 million customers worldwide.</p>
    </div>
    <div class="col-6 img_info_right">
      <img src="https://static.cex.io/landings/media/1x-our-mission-section-right-picture.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "v-img-info-section"
}
</script>

<style scoped>
  .img_info_section{
    margin-bottom: 120px;
  }
  .img_info_left{
    position: relative;
  }
  .img_info_left > p{
    position: absolute;
    bottom: 80px;
    left: 30px;
    width: 500px;
  }
  .img_info_left > img{
    height: auto;
    position: absolute;
    top: 40px;
    right: -30px;
    z-index: 1;
    width: 100%;
  }
  .img_info_right{
    background-color: #f7f8fa;
    padding: 60px;
  }
  .img_info_right{
    height: auto;
  }
</style>