<template>
  <div>
    <form action="">
      <h4 class="heading_darkBlue mt-5">Phone Verification</h4>
      <div class="input_block mt-5">
        <span class="text_greey text_normal">Phone number</span>
        <VuePhoneNumberInput/>
        <button class="">Send Code</button>
      </div>
      <div>
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Enter code</span>
        <input type="text" class="form-control" placeholder="Enter code" >
      </div>
    </form>
    <div class="next_prev_routes">
      <router-link to="/account/verification/identity/contry-of-residence" class="btn btn_darkBlue">Prev</router-link>
      <router-link to="/account/verification/identity/proof-of-identity-document" class="btn btn_blue">Next</router-link>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
  name: "v-phone-verification",
  components:{
    VuePhoneNumberInput
  }
}
</script>

<style scoped>
h4{
  text-align: center;
}
form{
  display: block;
  width: 400px;
  margin: 0 auto;
}
.input_block{
  position: relative;
}
.input_block > button{
  position: absolute;
  bottom: 7px;
  right: 10px;
  z-index: 9;
  border: 0;
  background-color: initial;
  color: #42a5a5;
}
.input_block > button:focus{
  outline: 0;
}
.next_prev_routes{
  display: table;
  margin: 15px auto;
}
.next_prev_routes > a{
  margin: 10px;
  padding: 6px 25px;
}
</style>