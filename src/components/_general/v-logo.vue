<template>
  <router-link to="/" class="image_href">
<!--    <img :src="require('@/assets/img/demoLogo.png')" alt="">-->
    <h3><span class="bg">K7</span><span>Crypto</span></h3>
  </router-link>
</template>

<script>
export default {
name: "v-logo"
}
</script>

<style scoped>
  h3{
    color: #033d6b;
    font-weight: bold;
    letter-spacing: -1px;
  }
  span{
    color: #0b364f;
    font-weight: 900;
    letter-spacing: -2px;


  }
  span.bg{
    background-color: #42a5a5;
    color: #fff;
    padding: 1px 5px;
    font-weight: bold;
    border-top-right-radius: 10px 20px;
    border-bottom-left-radius: 10px 20px;
    font-style: italic;

  }
  span:last-child{
    margin-left: 0;
    @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
      font-family: 'Syne Mono', monospace;
  }
  .image_href > img{
    width: 80px;
    height: 60px;
  }
</style>