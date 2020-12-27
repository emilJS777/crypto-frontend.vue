<template>
  <div class="main">
    <div class="top_description">
      <h2>Hi there</h2>
      <p>
        Welcome to K7.Crypto. We are experiencing a high volume of requests.
        As a result, reply time may take longer. Please keep all requests
        at the same message thread.
      </p>
    </div>
    <div class="btns_block">
      <button class="btn btn_blue" @click="$emit('changePage')">Ask a question →</button>
      <button class="btn btn_blue">---</button>
      <button class="btn btn_blue">---</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-home"
}
</script>

<style scoped>
  .main{
    background-color: #f6f5f5;
    height: 100%;
  }
  .top_description{
    background-color: #42a5a5;
    color: #fff;
    padding: 20px;
    margin-bottom: -30px;
  }
  .top_description > h2{
    text-align: center;
  }
  button{
    border: 1px solid #fff;
    display: table;
    margin: 15px auto;
  }
</style>