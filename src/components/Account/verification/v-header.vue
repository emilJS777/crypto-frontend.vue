<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <v-logo/>
        </div>
        <div class="col-6 exit">
          <router-link to="/account/trade">
            <img :src="require('@/assets/icons/iconfinder_free-29_618316.png')" alt="">
            Exit
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLogo from "../../_general/v-logo";
export default {
name: "v-header",
  components: {VLogo}
}
</script>

<style scoped>
  .header{
    padding: 10px;
  }
  .exit a{
    padding: 0 5px;
    vertical-align: bottom;
    float: right;
    color: #c4dbe9;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 25px;
    transition: .2s;
  }
  .exit a:hover{
    background-color: #eaeeee;
  }
  .exit > a >img{
    width: 30px;
    height: auto;
  }
</style>