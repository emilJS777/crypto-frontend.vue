<template>
  <div class="container-fluid">
    <router-link to="/">Back to Main</router-link>
    <div class="form box_shadow">
      <div class="heading">
        <h2>Complete your account setup</h2>
        <span class="text_normal text_greey">To start, provide basic info about yourself.</span>
      </div>
      <div class="body">
        <input v-model="completeAccountSetup.firstName" class="form-control" type="text" placeholder="First Name">
        <input v-model="completeAccountSetup.lastName" class="form-control" type="text" placeholder="Last Name">
        <div class="date">
          <span class="text_greey text_normal">Date birth</span>
          <date-dropdown default="1995.01.10" min="1950" max="2020" v-model="completeAccountSetup.date"/>
        </div>
      </div>
      <router-link  @click.native="sendCompleteAccountSetup" to="/">Next</router-link>
    </div>
  </div>
</template>

<script>
import  dateDropdown from "vue-date-dropdown";

export default {
name: "index",
  components: {dateDropdown},
  data(){
  return{
    completeAccountSetup: this.$store.getters['auth/completeAccountSetup/getState']
   }
  },
  methods: {
    sendCompleteAccountSetup(){
      this.$store.commit('auth/completeAccountSetup/setState', this.completeAccountSetup);
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