<template>
  <select name=""  class="form-control custom-select">
    <option v-for="(item, index) in priceTag" :key="index" >
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  props: ["priceTag"],
  name: "v-select"
}
</script>

<style scoped>

  select{
    height: 60px;
    width: 100%;
    font-size: 24px;
  }
</style>