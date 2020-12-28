<template>
  <div class="ready_answers">
    <p class="text_greey" @click="$emit('changePage')">⟵</p>
    <div class="answers_block">
      <router-link to="/account/support/edition" class="btn btn_blue">How to buy Bitcoin?</router-link>
      <router-link to="/account/support/edition" class="btn btn_blue">How to buy Bitcoin?</router-link>
      <router-link to="/account/support/edition" class="btn btn_blue">How to buy Bitcoin?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-ready-answers"
}
</script>

<style scoped>
.ready_answers{
  background-color: #f8f8f8;
  width: 100px;
  height: 100px;
}
p{
  cursor: pointer;
  border-bottom: 1px solid #e9e9e9;
  padding: 8px 15px;
  font-weight: bold;
  font-size: 20px;
  background-color: #f3f3f3;
}
.answers_block{
  padding: 0 15px;
  overflow-y: auto;
}
.answers_block a{
  color: #42a5a5;
  display: table;
  margin: 10px auto;
  text-align: center;
  font-size: 18px;
  padding: 3px 10px;
}
</style>