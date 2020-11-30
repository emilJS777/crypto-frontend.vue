<template>
  <router-link to="/" class="image_href">
    <img :src="require('@/assets/img/demoLogo.png')" alt="">
  </router-link>
</template>

<script>
export default {
name: "v-logo"
}
</script>

<style scoped>
  .image_href > img{
    width: 80px;
    height: 60px;
  }
</style>