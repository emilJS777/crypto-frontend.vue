<template>
  <div class="score">
    <div><span>{{ this.name }}</span></div>
    <div><span>{{ this.score }}</span></div>
  </div>
</template>

<script>
export default {
name: "v-score",
  props:['name','score']
}
</script>

<style scoped>
  .score{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    color: #fff;
    font-style: italic;
    font-size: 13px;
    margin: 10px 0;
    border-bottom: 1px solid #d9d9d9;
  }
  .score>div:last-child{
    text-align: right;
  }
</style>