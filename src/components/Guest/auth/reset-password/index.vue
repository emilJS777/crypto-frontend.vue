<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 auth_block">
        <form action="" class="auth_form box_shadow" @submit="validForm">
          <div class="form_head_block">
            <router-link to="/login">back to login</router-link>
            <h1 class="heading_darkBlue">Reset your password</h1>
            <p class="text_greey text_big">To reset your password, enter the email address you use to sign in to K7.Crypto account</p>
          </div>
          <div class="input_block input_block_login">
            <input type="text" class="form-control" id="email" placeholder="Email Address">
            <span class="text_small" v-if="!emailValid">
              Email is incorrect
            </span>
          </div>
          <input type="submit" class="btn btn_blue" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {validationFunction} from "../form-validation";

export default {
  name: "index",
  components: {},
  mixins:[
      validationFunction
  ]
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
  display: table;
  position: absolute;
  width: 550px;
  padding: 40px;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
}
.auth_form > *{
  margin-top: 30px;
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
.input_block > span{
  color: #e22929;
  font-style: italic;
  font-size: 12px;
  display: block;
  height: initial;
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