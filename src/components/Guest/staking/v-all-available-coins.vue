<template>
  <div class="top_crypto">
    <div class="container">
      <div class="row">
        <div class="col-12 table mt-5 mb-5">
          <h1 class="heading_darkBlue">All available coins</h1>
          <div class="row table_head">
            <div class="col-2"><span>Coin</span></div>
            <div class="col-2"><span>Estimated Annual Yield*</span></div>
            <div class="col-3"><span>Minimum Holdings</span></div>
            <div class="col-3"><span>Reward Coin</span></div>
            <div class="col-2"><span></span></div>
          </div>
          <div class="row table_body">
            <div class="col-2">
              <i class="cf cf-btc"></i>
              <p>Bitcoin</p>
            </div>
            <div class="col-2"><p class="plus">1-4%</p></div>
            <div class="col-3"><p class="heading_darkBlue">10 ADA</p></div>
            <div class="col-3"><p class="heading_darkBlue">ADA</p></div>
            <div class="col-2">
              <router-link to="/account/staking" class="btn btn_darkBlue">Deposit</router-link>
              <router-link to="/buysell" class="btn btn_blue">Buy</router-link>
            </div>
          </div>
          <div class="row table_body">
            <div class="col-2">
              <i class="cf cf-ltc"></i>
              <p>Litecoin</p>
            </div>
            <div class="col-2"><p class="plus">1-4%</p></div>
            <div class="col-3"><p class="heading_darkBlue">10 ADA</p></div>
            <div class="col-3"><p class="heading_darkBlue">ADA</p></div>
            <div class="col-2">
              <router-link to="/account/staking" class="btn btn_darkBlue">Deposit</router-link>
              <router-link to="/buysell" class="btn btn_blue">Buy</router-link>
            </div>
          </div>
          <div class="row table_body">
            <div class="col-2">
              <i class="cf cf-eth"></i>
              <p>Etherun</p>
            </div>
            <div class="col-2"><p class="plus">1-4%</p></div>
            <div class="col-3"><p class="heading_darkBlue">10 ADA</p></div>
            <div class="col-3"><p class="heading_darkBlue">ADA</p></div>
            <div class="col-2">
              <router-link to="/account/staking" class="btn btn_darkBlue">Deposit</router-link>
              <router-link to="/buysell" class="btn btn_blue">Buy</router-link>
            </div>
          </div>
          <div class="row table_body">
            <div class="col-2">
              <i class="cf cf-xrp"></i>
              <p>Bitcoin</p>
            </div>
            <div class="col-2"><p class="plus">1-4%</p></div>
            <div class="col-3"><p class="heading_darkBlue">10 ADA</p></div>
            <div class="col-3"><p class="heading_darkBlue">ADA</p></div>
            <div class="col-2">
              <router-link to="/account/staking" class="btn btn_darkBlue">Deposit</router-link>
              <router-link to="/buysell" class="btn btn_blue">Buy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-top-crypto-section",
  components: {}
}
</script>

<style scoped>
.top_crypto{
  background-color: #f5f7fa;
}
.top_crypto > div > div > div > h1{
  text-align: center;
  margin-bottom: 100px;
}
.table{
  text-align: center;
}
.table > div{
  border-bottom: 1px solid #e5e3e3;
}
.table_head > div{
  color: #919494;
  padding-bottom: 15px;
}
.table_head > div:first-child{
  text-align: left;
}
.table_head > div:last-child{
  text-align: right;
}
.table_body > div{
  padding-top: 30px;
  padding-bottom: 30px;
}
.table_body > div:first-child{
  text-align: left;
}
.table_body > div:last-child{
  text-align: right;
}
.table_body > div > i{
  margin-right: 10px;
  font-size: 25px;
  vertical-align: middle;
  color: #079494;
}
.table_body > div > *{
  display: inline-block;
}
.table_body > div > a{
  margin-right: 5px;
}
.table_body > div > p{
  line-height: 2;
  vertical-align: center;
  margin: 0;
  font-size: 18px;
  transition: .2s;
  font-weight: bold;
}
.table_body > div > p:hover{
  color: #42a5a5;
}
.table_body > div > p.minus{
  color: #fa2121;
}
.table_body > div > p.plus{
  color: #02795d;
}
</style>