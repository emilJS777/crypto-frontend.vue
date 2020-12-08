<template>
  <form action="">
    <h4 class="heading_darkBlue mt-5">Phone Verification</h4>
    <div class="input_block mt-5">
      <span class="text_greey text_normal">Phone number</span>
      <VuePhoneNumberInput/>
    </div>
    <div class="input_block mt-4">
      <span class="text_greey text_normal">Enter code</span>
      <input type="text" class="form-control" placeholder="Enter code" readonly>
    </div>
  </form>
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
</style>