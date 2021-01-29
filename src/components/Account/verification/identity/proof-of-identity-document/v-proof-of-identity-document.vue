<template>
<div>
  <form action="">
    <h4 class="heading_darkBlue mt-5">Proof of identity document</h4>
    <div class="input_block mt-5">
      <span class="text_greey text_normal">Choose the type of document</span>
      <select class="form-control custom-select" >
        <option value="">International Passport</option>
        <option value="">National ID Card</option>
        <option value="">Driver`s license</option>
      </select>
    </div>
    <div class="input_block mt-4">
      <span class="text_greey text_normal">Issuing country</span>
      <country-select v-model="country" class="custom-select form-control" topCountry="US" />

    </div>
    <div class="qr_code_block">
      <img :src="require('@/assets/img/qrcode.png')" alt="">
      <p class="text_normal text_greey">Upload document by QR code</p>
    </div>
    <div class="upload_btn_block">
      <hr>
      <span class="text_big text_greey">or</span>
      <router-link to="/account/verification/identity/proof-of-identity-document-upload" class="btn btn_blue">Upload File</router-link>
    </div>
  </form>
  <div class="next_prev_routes">
    <router-link to="/account/verification/identity/phone-verification" class="btn btn_darkBlue">Prev</router-link>
    <router-link to="/account/verification/identity/proof-of-identity-document-upload" class="btn btn_blue">Next</router-link>
  </div>
</div>
</template>

<script>
export default {
name: "v-proof-of-identity-document",
  data(){
  return{
    country: "",
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
  .qr_code_block{
    padding: 10px;
    text-align: center;
  }
  .qr_code_block > img{
    width: 150px;
    display: block;
    margin: 0 auto;
    height: 150px;
  }
  .qr_code_block > p{
    margin-top: 10px;
    margin-bottom: 0;
  }
  .upload_btn_block > span{
    display: table;
    margin: 0 auto;
    margin-top: -37px;
    padding: 5px 10px;
    background-color: #f1f1f1;
  }
  .upload_btn_block > a{
    display: table;
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