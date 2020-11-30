<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 img_block">
        <img :src="require('@/assets/img/bitcoin.png')" alt="">
      </div>
      <div class="col-8 auth_block">
        <form action="" class="auth_form">
          <div class="form_head_block">
            <router-link to="/">back to main</router-link>
            <h1 class="heading_darkBlue">Sign in to your account</h1>
            <p class="text_greey text_big">Securely buy crypto and start trading on a trusted exchange</p>
          </div>
          <div class="input_block input_block_login">
            <input type="text" class="form-control" placeholder="Email or username">
          </div>
          <div class="input_block input_block_password">
            <input type="text" class="form-control" placeholder="Password">
          </div>
          <div class="input_block">
            <a href="#">Forgot your password?</a>
          </div>
          <button class="btn btn_blue">Sign in</button>
        </form>
        <div class="social_sign_block">
          <a href="#"><img :src="require('@/assets/icons/social/iconfinder_twitter-social-media_765208.png')" alt=""></a>
          <a href="#"><img :src="require('@/assets/icons/social/iconfinder_facebook-social-media_765252.png')" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login"
}
</script>

<style scoped>
.img_block{
  padding: 0;
  height: 100vh;
}
.auth_block{
  background-color: #e5e3e3;
}
.auth_form{
  margin-top: 30px;
  width: 60%;
  margin: 30px auto;
}
.form_head_block > a{
  color: #42a5a5;
  position: relative;
  margin: 20px;
  font-weight: bold;
  font-style: italic;
}
.form_head_block > a:before{
  content: "\27A4";
  position: absolute;
  left: -18px;
  transform: rotate(180deg);
  transition: .2s;
}
.form_head_block > a:hover::before{
  left: -22px;
}
.input_block{
  margin-top: 20px;
  height: 60px;
}
.input_block > input{
  height: 100%;
  font-size: 20px;
  background-color: initial;
}
.auth_form > .input_block > a{
  text-decoration: underline !important;
  color: #42a5a5;
}
.auth_form > button{
  display: block;
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 25px;
}
.social_sign_block{
  display: flex;
  width: 60%;
  margin: 20px auto;
}
.social_sign_block > a:hover > img{
  background-color: #42a5a5;
}
.social_sign_block > a > img{
  transition: .3s;
  width: 38px;
  height: 38px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid #acaaaa;
}

</style>