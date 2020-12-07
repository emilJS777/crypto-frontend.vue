<template>
  <div class="container mt-5">
    <div class="row">
      <div class="block">
        <h4 class="heading_lightBlue">Email</h4>
        <form action="">
          <label class="text_greey text_normal">Primary Email Address</label>
          <input type="text" class="form-control" value="example.com">
          <div class="confirmed"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-email-section"
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
.confirmed{
  position: relative;
  float: right;
  opacity: .5;
}
.confirmed:before{
  content: '';
  position: absolute;
  right: -30px;
  top: 8px;
  width: 20px;
  height: 20px;
  background-image: url(https://cex.io/img/social-connect/confirmed.png);
  background-repeat: no-repeat;
}
</style>