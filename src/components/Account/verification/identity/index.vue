<template>
  <div id="identity">
    <v-header :progress='true' :verificationPage="verificationPage"/>
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <v-contry-of-residence v-if="verificationPage === 0"/>
          <v-phone-verification v-if="verificationPage === 1"/>
          <div class="next_back_block mt-5">
            <button class="btn btn_darkBlue" @click="nextPage('back')">Back</button>
            <button class="btn btn_blue" @click="nextPage('next')" >Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "../v-header";
import VContryOfResidence from "./v-contry-of-residence";
import VPhoneVerification from "./v-phone-verification";
export default {
  name: "index",
  data(){
    return{
      verificationPage:0
    }
  },
  methods:{
    nextPage:function(changePage){
      if(changePage === "next" && this.verificationPage < 1)
        this.verificationPage++;
      else if(changePage === "back" && this.verificationPage > 0)
        this.verificationPage--;
    }
  },
  components: {VPhoneVerification, VContryOfResidence, VHeader}
}
</script>

<style scoped>
  #identity{
    background-color: #e8e8e8;
    height: 100vh;
  }
  .next_back_block{
    display: table;
    margin: 0 auto;
  }
  button{
    margin-right: 10px;
  }
</style>