<template>
  <div>
    <form action="">
      <h4 class="heading_darkBlue mt-5">International passport information</h4>
      <div class="input_block mt-5">
        <span class="text_greey text_normal">Serial number</span>
        <input type="text" v-model="serialNumber" class="form-control" placeholder="Serial Number" >
      </div>
      <div>
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Issuing country</span>
        <country-select v-model="issuingcCountry" class="custom-select form-control" topCountry="US" />
      </div>
      <div class="input_block mt-4 checkbox_block">
        <input type="checkbox" v-model="documentHasAnExpiryDate" class="custom-checkbox">
        <span class="text_greey text_normal">Document has an expiry date</span>
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Expiry Date</span>
        <date-dropdown default="1995.01.10" min="1950" max="2020" v-model="expiryDate"/>

      </div>
    </form>
    <div class="next_prev_routes">
      <router-link to="/account/verification/identity/personal-information" class="btn btn_darkBlue">Prev</router-link>
      <router-link to="/account/verification" class="btn btn_blue">Next</router-link>
    </div>
  </div>
</template>

<script>
import  dateDropdown from "vue-date-dropdown";

export default {
name: "v-international-passport-information",
  components: {dateDropdown},
  data(){
  return{
    serialNumber: "",
    issuingcCountry: "",
    documentHasAnExpiryDate: "",
    expiryDate: ""
  }
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
.checkbox_block > *{
  margin-left: 10px;
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