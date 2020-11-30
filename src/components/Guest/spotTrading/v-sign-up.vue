<template>
  <div class="sign_up_btn">
    <router-link to="/login" class="heading_lightBlue">SIGN UP WICH SITE</router-link>
  </div>
</template>

<script>
export default {
  name: "v-sign-up"
}
</script>

<style scoped>
.sign_up_btn{
  display: block;
  text-align: center;
  margin: 0 auto;
}
.sign_up_btn > a{
  font-size: 30px;
  border: 2px solid#3da78d;
  padding: 15px;
}
</style>