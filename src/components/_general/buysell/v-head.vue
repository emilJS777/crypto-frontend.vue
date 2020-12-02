<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <v-logo/>
      </div>
    </div>
  </div>
</template>

<script>
  import vLogo from "../general/v-logo"

export default {
  name: "v-head",
  components:{
    vLogo
  }
}
</script>

<style scoped>
  .container{
    padding-top: 10px;
  }
</style>