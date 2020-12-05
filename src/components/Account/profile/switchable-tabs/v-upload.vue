<template>
  <div class="upload container-fluid">
    <h6 class="heading_lightBlue mt-3">Upload Additional Files for Verification</h6>
    <div class="row">
      <form action="">
        <div class="form_block">
          <label class="text_greey text_normal">Drop Files Here or:</label>
          <input type="file" class="form-control">
              <br/>
          <span>
            Min - 50 KB, Max - 30 MB<br/>
            PNG, JPEG, GIF, PDF, TIFF<br/>
            Your Files
          </span>
        </div>
        <div class="form_block">

        </div>
        <div class="btn_block">
          <button class="btn btn_blue">Submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "v-upload"
}
</script>

<style scoped>
h6{
  font-weight: initial;
  letter-spacing: 2px;
}
form{
  padding: 30px;
  border: 1px solid #d2d8d8;
  border-radius: 6px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em;
}
form input, form select{
  height: 35px;
  line-height: 1;
  background-color: #f3f3f3;
  border: 1px solid #b7b8b8;
}
form .btn_block {
  width: 100%;
  display: block;
  border-top: 1px solid #d2d8d8;
  padding-top: 20px;
}
.form_block span{
  font-size: 14px;
  color: #7a7878;
}
form .btn_block button{
  font-weight: bold;
  background-color: #d9d8d8;
  border-radius: 2px;
  font-size: 14px;
  padding: 8px 40px;
}
</style>