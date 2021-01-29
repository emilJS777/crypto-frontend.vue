<template>
 <div>
   <form action="">
     <h4 class="heading_darkBlue mt-5">Country of residence</h4>
     <div class="input_block mt-5">
       <span class="text_greey text_normal">Country</span>
       <country-select v-model="country" class="custom-select form-control" topCountry="US" />
     </div>
     <div class="input_block mt-4">
       <span class="text_greey text_normal">Province/State</span>
       <region-select v-model="region" class="custom-select form-control" :country="country" :region="region" />
     </div>
   </form>
   <div class="next_prev_routes">
     <router-link to="/account/verification" class="btn btn_darkBlue">Prev</router-link>
     <router-link to="/account/verification/identity/phone-verification" class="btn btn_blue">Next</router-link>
   </div>
 </div>
</template>

<script>
export default {
  name: "v-contry-of-residence",
  data(){
    return{
      country: '',
      region: '',
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
.next_prev_routes{
  display: table;
  margin: 15px auto;
}
.next_prev_routes > a{
  margin: 10px;
  padding: 6px 25px;
}
</style>