<template>
  <div class="container-fluid">
    <router-link to="/">Back to Main</router-link>
    <div class="form box_shadow">
      <div class="heading">
        <h2>Reset your password</h2>
        <span class="text_normal text_greey">To reset your password, enter the email address you use to sign in to K7.Crypto account</span>
      </div>
      <div class="body">
        <input v-model="resetPassword.email" class="form-control" type="email" placeholder="Email">
      </div>
      <router-link @click.native="sendResetPassword" to="/">Submit</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  components: {},
  data(){
    return{
      resetPassword: this.$store.getters['auth/resetPassword/getState']
    }
  },
  methods:{
    sendResetPassword(){
      this.$store.commit('auth/resetPassword/setState', this.resetPassword);
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