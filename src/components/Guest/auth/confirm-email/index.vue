<template>
  <div class="container-fluid">
    <router-link to="/">Back to Main</router-link>
    <div class="form box_shadow">
      <div class="heading">
        <h2>Confirm your email</h2>
        <span class="text_normal text_greey">Securely buy crypto and start trading on a trusted exchange</span>
      </div>
      <div class="body">
        <p class="text_greey text_big">To be in control of your account activity.</p>
        <p class="text_greey text_big">We sent confirmation email to {{ email }} Please check your email for activation</p>
        <p class="text_greey text_big">Haven't received the email? Make sure to check your spam folder.</p>
        <p class="text_greey text_big">Still not there? Then try this:</p>
        <p class="text_big"><a href="#">Resend Email</a> or <router-link to="/register">Change email</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index",
  data(){
    return{
      email: this.$store.getters['auth/register/getState'].email
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: #efefef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-fluid > a{
  color: #42a5a5;
  font-weight: bold;
  position: fixed;
  top: 15px;
  left: 15px;
}
.form{
  background-color: #fff;
  width: 450px;
  padding: 20px;
}
.form >.heading > h2{
  color: #164764;
  text-align: center;
}
.form > .body > input,.form > .body > select{
  width: 100%;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1;
  display: block;
}
.form > .body > input:focus, .form > .body > select{
  outline: 0;
}
.form > .body > .checkbox_block > *{
  margin: 5px;
  vertical-align: middle;
}
.form > .body > a{
  color: #42a5a5;
  font-weight: bold;
  text-decoration: underline !important;
}
.form > a{
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 15px;
  background-color: #42a5a5;
  padding: 10px;
  color: #fff;
  font-size: 20px;
}
.form > p > a, .form > .body > p > a{
  color: #42a5a5;
}
</style>