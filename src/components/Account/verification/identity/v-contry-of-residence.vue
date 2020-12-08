<template>
  <form action="">
    <h4 class="heading_darkBlue mt-5">Country of residence</h4>
    <div class="input_block mt-5">
      <span class="text_greey text_normal">Country</span>
      <select class="form-control custom-select" >
        <option value="">Armenia</option>
        <option value="">Afganistan</option>
      </select>
    </div>
    <div class="input_block mt-4">
      <span class="text_greey text_normal">Province/State</span>
      <select class="form-control custom-select" >
        <option value="">Aragatsotn</option>
        <option value="">Erevan</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: "v-contry-of-residence"
}
</script>

<style scoped>
h4{
  text-align: center;
}
form{
  display: block;
  width: 400px;
  margin: 0 auto;
}
</style>