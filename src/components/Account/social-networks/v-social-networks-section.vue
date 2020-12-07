<template>
  <div class="container mt-5">
    <div class="row">
      <div class="block">
        <h4 class="heading_lightBlue">Social Networks</h4>
        <div class="socials_block mt-4">
          <a href="#">
            <img src="https://cex.io/img/social-connect/facebook-connected.png" alt="">
            Connect
          </a>
          <a href="#">
            <img src="https://cex.io/img/social-connect/github-connected.png" alt="">
            Connect
          </a>
          <a href="#">
            <img src="https://cex.io/img/social-connect/google-connected.png" alt="">
            Connect
          </a>
          <a href="#">
            <img src="https://cex.io/img/social-connect/vk-connected.png" alt="">
            Connect
          </a>
        </div>
        <p class="text_greey text_big mt-3">You can Sign In into K7 crypto with your Social Network account</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-social-networks-section"
}
</script>

<style scoped>
.block{
  border: 1px solid #d7d7d7;
  padding: 20px;
  border-radius: 6px;
  width: 600px;
}
h4{
  font-weight: initial;
}
.socials_block > a {
  color: grey;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin-right: 10px;
  transition: .2s;
  display: inline-block;
  margin-top: 5px;
}
.socials_block > a:hover{
  background-color: #ecebeb;
}
.socials_block > a > img{
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 5px;
}
</style>