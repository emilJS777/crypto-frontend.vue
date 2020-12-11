<template>
  <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <v-logo/>
          </div>
          <div class="col-10 nav_block ">
            <ul>
              <li v-bind:class="active === 'listings' ? 'active' : ''"><router-link to="/blog/listings">Listing</router-link></li>
              <li v-bind:class="active === 'product' ? 'active' : ''"><router-link to="/blog/product">Product</router-link></li>
              <li v-bind:class="active === 'leadership' ? 'active' : ''"><router-link to="/blog/leadership">Leadership</router-link></li>
              <li v-bind:class="active === 'geographies' ? 'active' : ''"><router-link to="/blog/geographies">Geographies</router-link></li>
              <li v-bind:class="active === 'market' ? 'active' : ''"><router-link to="/blog/market">Market</router-link></li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import VLogo from "../../../_general/v-logo";
export default {
name: "v-header",
  components: {VLogo},
  props: ["active"]
}
</script>

<style scoped>
  .header{
    width: 100%;
    background-color: #fff;
    padding: 18px;
    border-bottom: 1px solid #d6d6d6;
  }
  .nav_block{
    display: flex;
    align-items: center;
    float: right;
  }
  .nav_block > ul{
    margin: 0 ;
    vertical-align: middle;
    float: right;
    text-align: right;
  }
  .nav_block > ul > li{
    display: inline-block;
    margin-right: 15px;
  }
  .nav_block > ul > li.active{
    border-bottom: 2px solid#42a5a5;
  }
  .nav_block > ul > li >a{
    color: initial;
    padding: 2px 8px;
  }
  .nav_block > ul > li >a:hover{
    color: #626262;
  }
</style>