<template>
  <div>
    <form action="">
      <h4 class="heading_darkBlue mt-5">Personal information</h4>
      <div class="input_block mt-5">
        <span class="text_greey text_normal">Country</span>
        <country-select v-model="country" class="custom-select form-control" topCountry="US" />
      </div>
      <div>
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">First name</span>
        <input type="text" v-model="firstName" class="form-control" placeholder="First name" >
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Last name</span>
        <input type="text" v-model="lastName" class="form-control" placeholder="Last Name" >
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Patronymic</span>
        <input type="text" v-model="patronymic" class="form-control" placeholder="Patronymic" >
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Date birth</span>
        <date-dropdown default="1995.01.10" min="1950" max="2020" v-model="date"/>
      </div>
      <div class="input_block mt-4">
        <span class="text_greey text_normal">Sex</span>
        <select class="form-control custom-select">
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
      </div>
    </form>
    <div class="next_prev_routes">
      <router-link to="/account/verification/identity/proof-of-identity-document-upload" class="btn btn_darkBlue">Prev</router-link>
      <router-link to="/account/verification/identity/international-passport-information" class="btn btn_blue">Next</router-link>
    </div>
  </div>
</template>

<script>
import  dateDropdown from "vue-date-dropdown";
export default {
name: "v-personal-information",
  components: {dateDropdown},
  data(){
    return{
      country: "",
      firstName: "",
      lastName: "",
      patronymic: "",
      date: "",
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
.next_prev_routes{
  display: table;
  margin: 15px auto;
}
.next_prev_routes > a{
  margin: 10px;
  padding: 6px 25px;
}
</style>