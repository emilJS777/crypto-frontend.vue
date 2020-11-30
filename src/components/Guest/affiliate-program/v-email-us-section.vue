<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="https://static.cex.io/landings/media/2x-question-image.png" alt="">
      </div>
      <div class="col-6">
        <div class="info_block">
          <h1 class="heading_lightBlue">Email us anytime</h1>
          <a href="#" class="btn btn_blue">affilites@cex.io</a>
          <a href="#" class="text_big">Frequently Asked Questions</a>
          <a href="#" class="text_big">Affiliate Program Terms of Use</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-email-us-anytime"
}
</script>

<style scoped>
  img{
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
  }
  h1{
    margin-bottom: 40px;
  }
  a{
    line-height: 2;
    display: block;

  }
  a.btn{
    display: inline-block;
    font-size: 25px;
    line-height:1.5;
    margin-bottom: 30px;
  }
  *{
    text-align: left;
  }
  .col-6:nth-child(2){
    display: flex;
    align-items: center;
  }
  .info_block{
    width: 70%;
    display: block;
    margin: 0 auto;
    height: 400px;
    padding-top: 100px;
  }
  a:nth-child(3), a:nth-child(4){
    color: #033d6b;
    text-decoration: underline !important;
  }
  a:nth-child(3):hover, a:nth-child(4):hover{
    color: #42a5a5;
  }
</style>