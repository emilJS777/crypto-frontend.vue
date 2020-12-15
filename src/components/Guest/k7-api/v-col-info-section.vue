<template>
  <div class="col-4">
    <img :src=logo alt="">
    <h4 class="heading_darkBlue">{{ title }}</h4>
    <p class=" text_normal">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "v-col-info-section",
  props: ['title', 'desc', 'logo']
}
</script>

<style scoped>
    img{
      width: 160px;
      height: 160px;
    }
    div> *{
      text-align: center;
      margin-top: 20px;
    }
    p{
      color: #0b364f;
    }
</style>