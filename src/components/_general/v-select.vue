<template>
  <select v-bind:class="this.border === '0' ? 'borderNone' : '' "  class="form-control custom-select">
    <option v-for="(item, index) in priceTag" :key="index" >
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  props: ["priceTag", "border"],
  name: "v-select",
}
</script>

<style scoped>

  select{
    height: 60px;
    width: 100%;
    font-size: 24px;
  }
  .borderNone{
    border: 0;
  }
  .borderNone:focus{

    box-shadow: none;
  }
</style>