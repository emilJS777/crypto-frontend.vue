<template>
  <div class="header">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-5">
          <v-logo/>
        </div>
        <div class="col-5 go_to_account">
          <router-link to="/account/trade">Go to K7Crypto</router-link>
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <div class="col-10">
          <h3>
            Advice and answers from the K7.Crypto Team
          </h3>
        </div>
      </div>
      <div class="row mt-4 justify-content-center">
        <div class="col-10 search_block">
          <input type="text" placeholder="search for articles...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLogo from "../../../_general/v-logo";
export default {
name: "v-header",
  components: {VLogo}
}
</script>

<style scoped>
.header{
  padding: 40px;
  background-color: #42a5a5;
}
.go_to_account a{
  float: right;
  color: #fff;
  line-height: 3;
  font-size: 14px;
  position: relative;
  font-weight: bold;
}
.go_to_account a:before{
  content: '\27A4';
  position: absolute;
  width: 20px;
  height: 20px;
  font-size: 10px;
  top: 6px;
  line-height: 1;
  left: -25px;
  transform: rotate(-180deg);
}
.go_to_account:before{
  
}
h3{
  color: #fff;
  font-style: italic;
}
.search_block{
  position: relative;
}
.search_block::before{
  content: '';
  width: 40px;
  height: 40px;
  left: 30px;
  top: 15px;
  position: absolute;
  background-image: url('~@/assets/icons/iconfinder_UI_Basic_GLYPH-02_4733396.png');
  background-size: 30px;
  background-repeat: no-repeat;
  opacity: .6;
}
.search_block > input{
  width: 100%;
  height: 60px;
  font-size: 20px;
  padding: 20px;
  padding-left: 80px;
  border-radius: 6px;
  border: 0;
  background-color: #a3caca;
  transition: .3s;
  font-style: italic;
  color: #4a4b4b;
}
.search_block > input:focus{
  outline: 0;
  background-color: #fff;
}

</style>