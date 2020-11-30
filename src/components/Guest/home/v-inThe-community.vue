<template>
  <div class="container in_the_community">
    <h1 class="heading_lightBlue">Become part of a global community of people who have found their path to the crypto world with CEX.IO</h1>
    <div class="row">
      <div class="col-12">
        <router-link to="/register" class="btn btn_blue">Join CEX.IO</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-inThe-community"
}
</script>

<style scoped>
  .in_the_community{
    background-color: #f8f8f8;
    padding: 65px 25px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
    border-radius: 10px;
  }
  h1{
    margin-bottom: 60px;
    font-weight: bold;
  }
  a{
    padding: 15px 35px;
  }
</style>