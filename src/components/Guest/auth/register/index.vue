<template>
    <div class="container-fluid">
      <router-link to="/">Back to Main</router-link>
      <div class="form box_shadow">
          <div class="heading">
            <h2>Create your account</h2>
            <span class="text_normal text_greey">Securely buy crypto and start trading on a trusted exchange</span>
          </div>
          <div class="body">
            <input v-model="register.email" class="form-control" type="email" placeholder="Email">
            <input v-model="register.password" class="form-control" type="password" placeholder="Password">
            <input v-model="register.confirmPassword" class="form-control" type="password" placeholder="Confirm Password">
            <country-select v-model="register.country" class="custom-select"  topCountry="US" />
            <div class="checkbox_block">
              <input type="checkbox">
              <span class="text_small text_greey">I agree to receive occasional emails and newsletters from K7.Crypto.</span>
            </div>
            <div class="checkbox_block">
              <input type="checkbox">
              <span class="text_small text_greey">I accept K7.crypto's Terms of Use and Privacy Policy.</span>
            </div>
          </div>
        <router-link @click.native="sendRegister" to="/confirm-email">Create Account</router-link>
        <p class="text_normal mt-1">Already have an account? <router-link to="/login">Sign in</router-link></p>
      </div>
    </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      register: this.$store.getters['auth/register/getState']
    }
  },
  methods:{
    sendRegister(){
      this.$store.commit('auth/register/setState', this.register)
    },
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