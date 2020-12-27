<template>
  <div class="top_description">
    <h2>Hi there</h2>
    <p>
      Welcome to K7.Crypto. We are experiencing a high volume of requests.
      As a result, reply time may take longer. Please keep all requests
      at the same message thread.
    </p>
  </div>
</template>

<script>
export default {
name: "v-top-description"
}
</script>

<style scoped>
.top_description{
  background-color: #42a5a5;
  color: #fff;
  padding: 20px;
  margin-bottom: -50px;
}
.top_description > h2{
  text-align: center;
}
</style>