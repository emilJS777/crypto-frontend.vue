<template>
  <div>
    <form action="">
      <h4 class="heading_darkBlue mt-5 text-center">Proof of identity document</h4>

      <div class="file_upload_block">
          <h6 class="box_shadow">front side</h6>
        <img src="https://images.vexels.com/media/users/3/131134/isolated/preview/a3d01cc27afc425e0721b2b9eee29c4a-identity-card-icon-by-vexels.png" alt="">
        <div class="file_block">
          <input type="file" class="hidden" id="upload_front_side">
          <p><label for="upload_front_side">Add Photo</label> or drop photo</p>
        </div>
      </div>

      <div class="file_upload_block">
        <h6 class="box_shadow">Selfie with ID & Note</h6>
        <img src="https://www.bikelink.org/assets/photo-id-selfie-icon-2f07ebdf971d41b0a8c702e97bb48884eaf0c2b51f9da3819dbfd237be584580.png" alt="">
        <div class="file_block">
          <input type="file" class="hidden" id="upoad_selfie_with_id">
          <p><label for="upoad_selfie_with_id">Add Photo</label> or drop photo</p>
        </div>
      </div>

      <div class="desc">
        <p class="text_normal text_greey">
          Make sure image details are clear to read.
          Accepted formats: PDF, PNG, JPG.
        </p>
      </div>
    </form>
    <div class="next_prev_routes">
      <router-link to="/account/verification/identity/proof-of-identity-document" class="btn btn_darkBlue">Prev</router-link>
      <router-link to="/account/verification/identity/personal-information" class="btn btn_blue">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "v-proof-of-identity-document-upload"
}
</script>

<style scoped>
form{
  display: table;
  margin: 0 auto;
}
h4{
  margin: 40px;
}
.file_upload_block{
  position: relative;
  background-color: #fff;
  width: 280px;
  height: 240px;
  border-radius: 8px;
  border: 1px dashed #9b9b9b;
  display: inline-block;
  margin: 15px;
}
.file_upload_block > h6{
  display: table;
  padding: 0 10px;
  border-radius: 6px;
  margin: 0 auto;
  margin-top: -10px;
  font-size: 14px;
  background-color: #fff;
}
.file_upload_block > img{
  width: 160px;
  height: auto;
  display: table;
  margin: 20px auto;
  opacity: .6;
}
.file_block{
  display: table;
  margin: 20px auto;
}
.file_block >p > label{
  color: #42a5a5;
  font-weight: bold;
  cursor: pointer;
}
.desc{
  display: table;
  margin: 0 auto;
  width: 250px;
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