<template>
  <div class="container about">
    <h1 class="heading_lightBlue">About us</h1>
    <div class="row">
      <div class="col-3">
        <h2 class="heading_lightBlue">2013</h2>
        <span>Market Entry Year</span>
      </div>
      <div class="col-3">
        <h2 class="heading_lightBlue">3M+</h2>
        <span>Registered Users
        On Trade Platform</span>
      </div>
      <div class="col-3">
        <h2 class="heading_lightBlue">0%</h2>
        <span>Customers' Funds Lost</span>
      </div>
      <div class="col-3">
        <h2 class="heading_lightBlue">99%</h2>
        <span>Countries Supported
        and 47 US States</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-about-us"
}
</script>

<style scoped>
  .about{
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
  h2{
    font-size: 45px;
  }
</style>