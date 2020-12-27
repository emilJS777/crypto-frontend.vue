<template>
  <div class="main">
    <button class="btn btn_blue">Ask a question →</button>
    <button class="btn btn_blue">Ask a question →</button>
    <button class="btn btn_blue">Ask a question →</button>
  </div>
</template>

<script>
export default {
  name: "v-main"
}
</script>

<style scoped>
  .main{
    padding: 20px;
    width: 200px;
  }
  button{
    border: 1px solid #fff;
    display: table;
    margin: 15px auto;
  }
</style>