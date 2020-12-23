<template>
  <div class="container pt-3 pb-5">
    <h1 class="heading_darkBlue mt-5">Join the Affiliates Club</h1>
    <router-link to="/register" class="btn btn_blue">Become an Affiliate</router-link>
  </div>
</template>

<script>
export default {
name: "v-join-affiliates"
}
</script>

<style scoped>
  div {
    text-align: center;
    height: 280px;
  }
  h1{
    font-size: 50px;
  }

  a{
    margin-top: 10px;
    font-size: 20px;
  }
</style>