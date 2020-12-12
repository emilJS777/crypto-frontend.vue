<template>
  <div class="close_block">
    <router-link :to=this.to>
      &#x2715; Close
    </router-link>
  </div>
</template>

<script>
export default {
  name: "v-close",
  props:['to']
}
</script>

<style scoped>
  .close_block{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 80px;
    height: 20px;
    font-size: 16px;

    z-index: 9;
  }
  .close_block > a{
    cursor: pointer !important;
    color: #a0a0a0;
  }
  .close_block > a:hover{
    color: #42a5a5;
  }
</style>