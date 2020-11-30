<template>
  <div class="face_section container">
    <img src="https://static.cex.io/landings/media/2x-main-picture.png" alt="">
    <div class="desc">
      <h1 class="heading_darkBlue">Media about us</h1>
      <p class="text_big text_greey">
        At CEX.IO, we're not only closely following the crypto industry and world events but are actively involved in them. We give statements and interviews, conduct analysis and make predictions, share expert opinions, tell about our plans, and get featured in the media.
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "v-face-section"
}
</script>

<style scoped>
  .face_section{
    padding-top: 90px;
    position: relative;
  }
  .desc{
    padding: 15px;
    background-color: #fff;
    width: 70%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-right-radius: 8px;
  }
  .desc > h1{
    font-size: 60px;
  }
</style>