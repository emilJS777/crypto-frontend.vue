<template>
  <div class="container mt-5">
    <div class="row">
      <div class="block">
        <h4 class="heading_lightBlue">UserID</h4>
        <form action="">
          <label class="text_greey text_normal">Your userID</label>
          <input type="text" class="form-control" value="up133935344">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-user-id"
}
</script>

<style scoped>
.block{
  border: 1px solid #d7d7d7;
  padding: 20px;
  border-radius: 6px;
  width: 600px;
}
h4{
  font-weight: initial;
}
form{
  max-width: 500px;
}
form > input{
  float: left;
  font-size: 14px;
  font-style: italic;
}
</style>