<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 auth_block">
        <form action="" class="auth_form box_shadow">
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
            <router-link to="/reset-password">Forgot your password?</router-link>
          </div>
          <button class="btn btn_blue">Sign in</button>
          <div class="mt-3">
            <p>Don’t have an account?
              <router-link to="/register">Create account</router-link>
            </p>
          </div>
          <div class="social_sign_block">
            <hr>
            <h5>or sign in with</h5>
            <div class="social_icons">
              <a href="#"><img :src="require('@/assets/icons/social/iconfinder_twitter-social-media_765208.png')" alt=""></a>
              <a href="#"><img :src="require('@/assets/icons/social/iconfinder_facebook-social-media_765252.png')" alt=""></a>
            </div>
          </div>
        </form>


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
  min-height: 100vh;
}
.auth_form{
  margin-top: 30px;
  width: 550px;
  margin: 30px auto;
  padding: 40px;
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
  margin: 5px auto;
  text-align: center;
}
.social_icons{
  display: block !important;
}
.social_icons > h6{
  font-style: italic;
}
.social_sign_block > div > a:hover > img{
  background-color: #42a5a5;
}
.social_sign_block >div> a > img{
  transition: .3s;
  width: 38px;
  height: 38px;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid #acaaaa;
}
p{
  font-size: 14px;
}
p > a{
  color: #42a5a5;
}

</style>