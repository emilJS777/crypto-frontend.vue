<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 auth_block">
        <form action="" class="auth_form  box_shadow">
          <div class="form_head_block">
            <router-link to="/">back to main</router-link>
            <h1 class="heading_darkBlue">Create your account</h1>
            <p class="text_greey text_big">Securely buy crypto and start trading on a trusted exchange</p>
          </div>
          <div class="input_block input_block_login">
            <input type="text" class="form-control" placeholder="Email Address">
            <span>
              Email is incorrect
            </span>
          </div>
          <div class="input_block input_block_password">
            <input type="text" class="form-control" placeholder="Password">
            <span class="text_small">
              Password should contain at least 8 characters, only Latin characters, one uppercase and lowercase letter, one number and one special character
            </span>
          </div>
          <div class="input_block input_block_select">
            <select class="custom-select">
              <option value="1">Country</option>
              <option value="1">Afgan</option>
              <option value="1">russia</option>
            </select>
          </div>
          <div class="input_block input_block_checkbox">
            <input type="checkbox" class="">
            <p class="text_greey">I agree to receive occasional emails and newsletters from CEX.IO.</p>
          </div>
          <div class="input_block input_block_checkbox">
            <input type="checkbox" class="">
            <p class="text_greey">I accept CEX.IO's Terms of Use and Privacy Policy</p>
            <span class="text_small">
              This checkbox is required
            </span>
          </div>
          <button class="btn btn_blue">Create Account</button>
          <div>
            <p class="mt-3">
              Already have an account?
              <router-link to="/login">Sign in</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index"
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

}
.input_block > *{
  height: 60px;
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
.input_block_select > select{
  width: 100%;
  background-color: initial;
  border: 1px solid #ced4da;
  font-size: 18px;
  padding: 5px;
  color: #929090;
  font-weight: bold;
}
.input_block_select > select:focus{
  outline: none;
}
.input_block_checkbox > *{
  display: inline-block;
  height: initial !important;
  margin-right: 10px;
}
.input_block_checkbox{
  margin-bottom: 10px;
}
.input_block_checkbox > p{
  font-size: 14px;
  vertical-align: top;
  margin: 0;
}
.input_block > span{
  color: #e22929;
  font-style: italic;
  font-size: 12px;
  display: block;
  height: initial;
}
p{
  font-size: 14px;
}
p > a{
  color: #42a5a5;
}
</style>