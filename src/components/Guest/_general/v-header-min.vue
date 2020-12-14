<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <!--        col-2 logo-->
        <div class="col-2">
          <v-logo/>
        </div>
        <!--        col-6 navbar-->
        <div class="col-7 navigation_block">
          <nav class="navigation">
            <ul>
              <li><router-link to="/buysell">BUY/SELL</router-link></li>
              <li><router-link to="/spot-trading">MARKET DATA</router-link></li>
              <li><router-link to="/affiliate-program">AFFILIATE</router-link></li>
              <li><router-link to="/staking">STAKING</router-link></li>
            </ul>
          </nav>
        </div>
        <!--        col-4 auth-->
        <div class="col-3 auth_block">
          <ul class="auth">
            <li><router-link to="/login" class="btn btn_blue">Sign in</router-link></li>
            <li><router-link to="/register" class="btn">Create Account</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vLogo from "../../_general/v-logo"

export default {
  name: "v-header",
  components: {
    vLogo
  }
}
</script>

<style scoped>
.header{
  padding: 15px;
  z-index: 999;
  background: #fff;
}
.header > .container{
  border-bottom: 1px solid #efecec;
  padding-bottom: 15px;
}
.navigation_block > nav{
  height: 100%;
  position: relative;
  z-index: 9;
}
.navigation_block > nav > ul{
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.navigation > ul > li{
  display: inline-block;
  margin-right: 10px;
  font-size: 12px;
  position: relative;
  color: #4a4b4b;
}

.navigation > ul > li:hover{
  color: #3da78d;
}

.navigation > ul > li>a{
  color: inherit !important;
  padding: 2px;
  font-size: 14px;
}
.auth_block{
  position: relative;
}
.auth_block > .auth{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.auth_block > .auth > li{
  display: inline-block;
  margin-left: 15px;
}
.auth_block > .auth > li:last-child{
  background-color: #42a5a5;
}
.auth_block > .auth > li:first-child > a{
  background-color: #fff !important;
  color: #444 !important;
  border: 1px solid #42a5a5;
  border-radius: 0;
}

</style>