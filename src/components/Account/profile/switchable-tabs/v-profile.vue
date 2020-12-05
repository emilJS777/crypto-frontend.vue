<template>
  <div class="profile container-fluid">
    <h6 class="heading_lightBlue mt-3">Profile information</h6>
    <div class="row">
      <form action="">
        <div class="form_block">
          <label class="text_greey text_normal">Full Name:</label>
          <input type="text" class="form-control">

          <label class="text_greey text_normal mt-4">Country:</label>
          <select name="" class="custom-select short">
            <option value="1">Armenia</option>
          </select>

          <label class="text_greey text_normal mt-4">Address:</label>
          <input type="text" class="form-control">
        </div>
        <div class="form_block">
          <label class="text_greey text_normal">City:</label>
          <input type="text" class="form-control short">

          <label class="text_greey text_normal mt-4">Postal Code:</label>
          <input type="text" class="form-control short">
        </div>
        <div class="btn_block">
          <button class="btn btn_blue">Save Profile</button>
        </div>
      </form>
    </div>
    <h6 class="heading_lightBlue mt-5">Change Password</h6>
    <div class="row mt-3">
      <form action="">
        <div class="form_block">
          <label class="text_greey text_normal">Current Password:</label>
          <input type="text" class="form-control">

          <label class="text_greey text_normal mt-4">Repeat New Password:</label>
          <input type="text" class="form-control">
        </div>
        <div class="form_block">
          <label class="text_greey text_normal">New Password:</label>
          <input type="text" class="form-control">
        </div>
        <div class="btn_block">
          <button class="btn btn_blue">Change Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-profile"
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
  form .short{
    width: 250px;
    display: block;
  }
  form .btn_block {
    width: 100%;
    display: block;
    border-top: 1px solid #d2d8d8;
    padding-top: 20px;
  }
  form .btn_block button{
    font-weight: bold;
    background-color: #d9d8d8;
    border-radius: 2px;
    font-size: 14px;
    padding: 8px 40px;
  }
  form .content_bottom > *{

  }
</style>