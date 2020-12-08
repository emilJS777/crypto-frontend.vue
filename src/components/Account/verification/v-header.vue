<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <v-logo/>
        </div>
        <div class="col-4 center justify-content-center">
          <div class="progress_block"
          v-if="progress">
            <span class="min">0%</span>
            <div class="progress">
              <div class="progress_blue" v-bind:datatype="verificationPage"></div>
            </div>
            <span class="max">100%</span>
          </div>
        </div>
        <div class="col-4 exit">
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
  components: {VLogo},
  props:['progress','verificationPage']
}
</script>

<style scoped>
  .header{
    padding: 10px;
    border-bottom: 1px solid#eee;
    background-color: #e2e2e2;
  }
  .center{
    display: flex;
    align-items: center;
  }
  .center > .progress_block{
    display: flex;
    align-items: center;
    margin: 0;
  }
  .center >.progress_block > *{
    display: inline-block;
    margin-right: 15px;
    color: #42a5a5;
  }
  .center > .progress_block >div{
    width: 250px;
    height: 6px;
  }
  .progress_blue{
    height: 100%;
    background-color: #42a5a5;
  }
  .progress >div[datatype="0"]{
    width: 0;
  }
  .progress >div[datatype="1"]{
    width: 25%;
  }
  .exit a{
    padding: 3px 10px;
    vertical-align: bottom;
    float: right;
    color: #42a5a5;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    transition: .2s;
    border: 1px solid #6ab1b1;
  }
  .exit a:hover{
    background-color: #eaeeee;
  }
  .exit > a >img{
    width: 25px;
    height: auto;
  }
</style>